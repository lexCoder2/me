export function initNav(): void {
  const nav        = document.getElementById('main-nav')!;
  const toggle     = document.getElementById('nav-toggle')!;
  const mobileMenu = document.getElementById('mobile-menu')!;
  const indicator  = nav.querySelector('.nav-indicator') as HTMLElement;
  const navInner   = nav.querySelector('.nav-inner') as HTMLElement;

  // ─── Sliding indicator ────────────────────────────────────
  const desktopLinks = nav.querySelectorAll<HTMLAnchorElement>('.nav-links .nav-link');

  desktopLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      const navRect  = navInner.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      indicator.style.left    = `${linkRect.left - navRect.left}px`;
      indicator.style.width   = `${linkRect.width}px`;
      indicator.style.opacity = '1';
    });
  });

  navInner.addEventListener('mouseleave', () => {
    indicator.style.opacity = '0';
  });

  // ─── Scroll: add "scrolled" class after 40px ─────────────
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ─── Mobile toggle ────────────────────────────────────────
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    mobileMenu.setAttribute('aria-hidden', String(open));
    mobileMenu.classList.toggle('open', !open);
    toggle.classList.toggle('open', !open);
  });

  // Close mobile menu on any link click
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenu.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

export function initThemeToggle(): void {
  const themeBtn = document.getElementById('theme-btn') as HTMLButtonElement;

  function getStoredTheme(): 'dark' | 'light' {
    const s = localStorage.getItem('theme');
    if (s === 'dark' || s === 'light') return s;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme: 'dark' | 'light') {
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.dataset.active = theme;
    themeBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    );
  }

  // Sync button state with whatever the inline script already set
  applyTheme(getStoredTheme());

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
    const next: 'dark' | 'light' = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);

    if (!(document as any).startViewTransition) {
      applyTheme(next);
      return;
    }

    // Circular reveal from the button centre
    const { top, left, width, height } = themeBtn.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth  - x),
      Math.max(y, window.innerHeight - y),
    );

    const vt = (document as any).startViewTransition(() => applyTheme(next));
    vt.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 480,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  });
}
