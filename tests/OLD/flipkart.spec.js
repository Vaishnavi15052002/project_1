import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('laptop');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
});