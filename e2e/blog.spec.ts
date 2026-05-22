import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('blog index lists posts', async ({ page }) => {
    await page.goto('/en/blog');
    // Should have at least one blog post card/link
    const postLinks = page.locator('a[href^="/en/blog/"]');
    await expect(postLinks).not.toHaveCount(0);
  });

  test('clicking a blog post navigates to that post', async ({ page }) => {
    await page.goto('/en/blog');
    const firstLink = page.locator('a[href^="/en/blog/"]').first();
    const href = await firstLink.getAttribute('href');
    await firstLink.click();
    await expect(page).toHaveURL(new RegExp(href!.replace('/', '\\/')));
  });

  test('blog post page has article heading', async ({ page }) => {
    await page.goto('/en/blog');
    const firstLink = page.locator('a[href^="/en/blog/"]').first();
    await firstLink.click();
    // The post should have an h1
    await expect(page.locator('h1').first()).toBeVisible();
  });
});
