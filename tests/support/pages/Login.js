import { expect } from "@playwright/test";
import { loginLocator } from "../../locators/login.locators";

export class Login{

    constructor(page){
        this.page = page
    }

    async visit(){
        await this.page.goto('/')
        
        const heading = await this.page.getByRole(loginLocator.heading.role, {name: loginLocator.heading.name})
        await expect(heading).toBeVisible()
    }

    async do(name, password){
        await this.page.getByPlaceholder(loginLocator.usernameInput).fill(name)
        await this.page.getByPlaceholder(loginLocator.passwordInput).fill(password)

        await this.page.getByRole(loginLocator.buttonForm.role, {name: loginLocator.buttonForm.name}).click()
    }

    async alertHaveText(text){
       const alert = await this.page.locator(loginLocator.alert)
       await expect(alert).toBeVisible()
    }
}