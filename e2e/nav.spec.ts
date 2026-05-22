import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/');
  });

  test('nav logo is visible', async ({ page }) => {
    await expect(page.locator('.nav-logo')).toBeVisible();
  });

  test('desktop nav links are present', async ({ page }) => {
    const links = page.locator('.nav-links .nav-link');
    await expect(links).toHaveCount(5);
  });

  test('nav links include Blog', async ({ page }) => {
    const blogLink = page.locator('.nav-links .nav-link', { hasText: 'Blog' });
    await expect(blogLink).toBeVisible();
  });

  test('theme toggle button is visible', async ({ page }) => {
    await expect(page.locator('#theme-btn')).toBeVisible();
  });

  test('theme toggle switches data-theme attribute', async ({ page }) => {
    const html = page.locator('html');
    const initialTheme = await html.getAttribute('data-theme');
    await page.locator('#theme-btn').click();
    const newTheme = await html.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
  });

  test('nav gets scrolled class after scrolling', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 100));
    await expect(page.locator('#main-nav')).toHaveClass(/scrolled/);
  });
});
