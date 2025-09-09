import {test,expect} from '@playwright/test'
test ('validate page Title and URL',async ({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/');
const actualTitle = await page.title();
const actualURL = page.url();

const expectedTitle = "Automation Testing Practice";
const expectedURL = 'https://testautomationpractice.blogspot.com/'
expect(actualTitle).toBe(expectedTitle);
expect(actualURL).toBe(expectedURL);
});


