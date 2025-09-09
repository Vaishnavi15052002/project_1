// pages/LoginPage.js
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Navigate to the login page URL
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Perform login by filling in the username and password, then clicking the login button
  async login(username, password) {
    await this.usernameInput.fill(username);  
    await this.passwordInput.fill(password);   
    await this.loginButton.click();           
  }

  // Check if the login form (username field) is visible
  async isLoginFormVisible() {
    return await this.usernameInput.isVisible(); // Returns true if visible, false otherwise
  }
};

