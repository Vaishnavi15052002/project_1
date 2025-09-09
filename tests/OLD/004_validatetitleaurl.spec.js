import {test,expect} from '@playwright/test'
test ('validate page Title and URL',async ({page}) => {
await page.goto('https://demoblaze.com/');
const actualTitle = await page.title();
const actualURL = page.url();

const expectedTitle = "STORE";
const expectedURL = 'https://demoblaze.com/'
expect(actualTitle).toBe(expectedTitle);
expect(actualURL).toBe(expectedURL);
});


