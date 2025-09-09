import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('V');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Vaishnavi kandgule');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('V');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('Vaishu@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});