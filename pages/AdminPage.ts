import { Page, Locator } from "@playwright/test";

export class AdminPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder(/username/);
    this.passwordInput = page.getByPlaceholder(/Password/);
    this.loginButton = page.getByRole("button", {name:'Login'});
    this.message = page.getByRole('link', {name:"Messages"});
  }

  async login(username: string, password: string) {
    await this.page.goto("https://automationintesting.online/admin");
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openMessages() {
    await this.message.click();
  }
}
