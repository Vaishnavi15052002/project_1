import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('link', { name: 'Sign in →' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('vaishnavikandgule30@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('V');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Vaishnavi@8431');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('link', { name: 'Vaishnavi15052002/Portfolio-' }).click();
  await page.locator('#folder-row-0').getByRole('cell', { name: 'Add files via upload' }).locator('div').nth(1).click();
  await page.getByRole('link', { name: 'README.md, (File)' }).click();
});