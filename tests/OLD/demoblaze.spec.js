import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fsafe%3Dactive%26q%3Dwindow%2Blaptop%26oq%3Dwindow%2Blaptop%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDc5MjlqMGo0qAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3Dm3O4aMqPLY-5vr0P09GJ0Ac%26safe%3Dactive&q=EgSnZ1h9GJzn4cUGIjDzpTWEIYFLkQ3uN2iGW1xjJQs2yS9EOQRPmoNLKL6Fi6iSi6KidA3ePixSx9avGBYyAVJaAUM');
  await page.locator('iframe[name="a-9wgbmfyl2urw"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-9wgbmfyl2urw"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
  await page.locator('iframe[name="c-9wgbmfyl2urw"]').contentFrame().locator('.rc-imageselect-tile').first().click();
  await page.locator('iframe[name="c-9wgbmfyl2urw"]').contentFrame().locator('.rc-imageselect-tile').first().click();
});