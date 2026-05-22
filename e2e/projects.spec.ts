import { test, expect } from '@playwright/test';

test.describe('Projects filter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to projects section so cards are in the DOM
    await page.locator('#projects').scrollIntoViewIfNeeded();
  });

  test('all project cards are shown by default', async ({ page }) => {
    const cards = page.locator('.project-card:not(.hidden)');
    await expect(cards).toHaveCount(8);
  });

  test('filter buttons exist for all categories', async ({ page }) => {
    const buttons = page.locator('.filter-btn');
    await expect(buttons).toHaveCount(4);
  });

  test('All button is active by default', async ({ page }) => {
    const allBtn = page.locator('.filter-btn.active');
    await expect(allBtn).toHaveCount(1);
    await expect(allBtn).toContainText('All');
  });

  test('clicking AI filter hides non-AI cards', async ({ page }) => {
    await page.locator('.filter-btn[data-filter="ai"]').click();
    const aiCards = page.locator('.project-card[data-category="ai"]:not(.hidden)');
    const hiddenCards = page.locator('.project-card.hidden');
    await expect(aiCards).toHaveCount(2);
    // non-ai cards should be hidden
    const nonAiCount = 8 - 2;
    await expect(hiddenCards).toHaveCount(nonAiCount);
  });

  test('clicking All after filter shows all cards', async ({ page }) => {
    await page.locator('.filter-btn[data-filter="ai"]').click();
    await page.locator('.filter-btn[data-filter="all"]').click();
    const visibleCards = page.locator('.project-card:not(.hidden)');
    await expect(visibleCards).toHaveCount(8);
  });
});
