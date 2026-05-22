import { test, expect } from '@playwright/test';

test.describe('Homepage sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page title contains lexCoder', async ({ page }) => {
    await expect(page).toHaveTitle(/lexCoder|Alex|Rodriguez/i);
  });

  test('hero section is visible', async ({ page }) => {
    await expect(page.locator('#home')).toBeVisible();
  });

  test('about section is visible', async ({ page }) => {
    await expect(page.locator('#about')).toBeVisible();
  });

  test('experience section is visible', async ({ page }) => {
    await expect(page.locator('#experience')).toBeVisible();
  });

  test('skills section is visible', async ({ page }) => {
    await expect(page.locator('#skills')).toBeVisible();
  });

  test('projects section is visible', async ({ page }) => {
    await expect(page.locator('#projects')).toBeVisible();
  });

  test('contact section is visible', async ({ page }) => {
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('get in touch CTA link exists', async ({ page }) => {
    const cta = page.locator('a[href="#contact"]').first();
    await expect(cta).toBeVisible();
  });
});
