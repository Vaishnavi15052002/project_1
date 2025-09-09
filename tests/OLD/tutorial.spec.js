import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByRole('button', { name: 'Elements' }).click();
  await expect(page.getByRole('heading', { name: 'Selenium - Automation' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('vaishnavi');
  await expect(page.getByRole('textbox', { name: 'Name:' })).toHaveValue('vaishnavi');
});