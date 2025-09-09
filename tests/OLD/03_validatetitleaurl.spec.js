import {test,expect} from '@playwright/test'
test ('validate page Title and URL',async ({page}) => {
await page.goto('https://playwright.dev/');
const actualTitle = await page.title();
const actualURL = page.url();

const expectedTitle = "Fast and reliable end-to-end testing for modern web apps | Playwright";
const expectedURL = 'https://playwright.dev/'
expect(actualTitle).toBe(expectedTitle);
expect(actualURL).toBe(expectedURL);
});


