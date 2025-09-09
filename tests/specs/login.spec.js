// tests/login.spec.js
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Swag Labs', () => {
  test.setTimeout(100000);
  test('should successfully log in with valid credentials', async ({ page }) => {
    const loginPage= new LoginPage(page);
    await loginPage.goto();

    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.isLoginFormVisible();
  });
});