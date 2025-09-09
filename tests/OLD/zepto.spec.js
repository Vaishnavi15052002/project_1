import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.zeptonow.com/');
  await page.getByTestId('search-bar-icon').click();
  await page.getByRole('link', { name: 'Hyfun Garden Fresh Pizza (' }).getByRole('button').click();
  await page.goto('https://www.zeptonow.com/');
});
