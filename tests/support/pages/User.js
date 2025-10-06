import { expect } from "@playwright/test";
import { usersLocator } from "../../locators/users.locators";



export class User{

    constructor(page){
        this.page = page;
    }

    async createUser(employeeName, userName, password){
        const title = await this.page.locator(usersLocator.registration_tile);
        expect(title).toBeVisible();

        await this.page.locator(usersLocator.select_role).nth(0).click();
        await this.page.locator(usersLocator.option_role, { hasText: 'ESS' }).click();

        await this.page.locator(usersLocator.select_role).nth(1).click();
        await this.page.locator(usersLocator.option_role, { hasText: 'Enabled' }).click();

        await this.page.getByPlaceholder(usersLocator.placeholder_employee).fill(employeeName);
        await expect(this.page.locator(usersLocator.option_employee)).toHaveText(employeeName);
        await this.page.locator(usersLocator.option_employee).click();

        await this.fillUserName(userName);

        const inputPassword = await this.page.locator(usersLocator.input_password).nth(0);
        await inputPassword.fill(password);

        const confirmPassword = await this.page.locator(usersLocator.input_password).nth(1);
        await confirmPassword.fill(password);

        await this.submitForm();

    }

    async fillEmployeeName(employeeName){
        await this.page.getByPlaceholder(usersLocator.placeholder_employee).fill(employeeName);
        await this.page.locator(usersLocator.option_employee).click();
    }

    async fillUserName(userName){
        const inputUser = await this.page.locator(usersLocator.input_userName);
        await inputUser.focus();
        await inputUser.fill(userName);
    }

    async submitForm(){

        await this.page.locator(usersLocator.button_submit).click();
    }

    async goToForm(){
        await this.page.locator(usersLocator.addButton).click();
    }
}