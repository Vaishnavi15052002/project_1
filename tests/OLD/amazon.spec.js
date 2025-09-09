import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('wireless headphones');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('link', { name: 'Apply the filter 4 Stars & Up' }).click();
  await page.locator('.a-button.a-button-primary > .a-button-inner > .a-button-text').first().click();
  await page.getByRole('link', { name: 'item in cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
  await page.goto('https://www.amazon.in/gp/cart/view.html?ref_=nav_cart');
});