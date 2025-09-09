import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await page.locator('frame').first().contentFrame().getByRole('textbox').click();
  await page.locator('frame').first().contentFrame().getByRole('textbox').fill('testing ');
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').fill('body');
  await page.locator('frame').nth(2).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(2).contentFrame().getByRole('textbox').fill('vaishnavi');
  await page.locator('frame').nth(3).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(3).contentFrame().getByRole('textbox').fill('vaish');
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().locator('.e2CuFe').click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('option', { name: 'Yes' }).locator('span').click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('button', { name: 'Next' }).click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().locator('.rFrNMe').click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('vaishnavi');
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().locator('.Pc9Gce').click();
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('testing is importanat');
  await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('button', { name: 'Submit' }).click();
});