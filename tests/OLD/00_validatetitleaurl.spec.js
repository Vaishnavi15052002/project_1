import {test,expect} from '@playwright/test'
test ('validate page Title and URL',async ({page}) => {
await page.goto('https://www.hollandandbarrett.com/');
const actualTitle = await page.title();
const actualURL = page.url();

const expectedTitle = "Holland & Barrett - UK's Leading Health & Wellbeing Store";
const expectedURL = 'https://www.hollandandbarrett.com/'
expect(actualTitle).toBe(expectedTitle);
expect(actualURL).toBe(expectedURL);
});

