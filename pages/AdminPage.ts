import {Page, Locator} from '@playwright/test'

export class AdminPage{
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly message: Locator

    constructor(page: Page){
        this.page = page
        this.usernameInput = page.getByTestId('username')
        this.passwordInput = page.getByTestId('password')
        this.loginButton = page.getByTestId('submit')
        this.message = page.locator('.fa-inbox')
    }

    async login(username: string, password: string){
        await this.page.goto('https://automationintesting.online/admin')
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async openMessages(){
        await this.message.click()
    }
}