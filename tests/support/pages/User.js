import { expect } from "@playwright/test";
import { usersLocator } from "../../locators/users.locators";

export class User{


    constructor(page){
        this.page = page;
    }

    async createUser(employeeName, userName, password, password2){
        const title = await this.page.locator(usersLocator.registration_tile);
        expect(title).toBeVisible();

        await this.selectRole();

        const status = 'Enable';
        await this.selectStatus(status);

        await this.page.getByPlaceholder(usersLocator.placeholder_employee).fill(employeeName);
        await expect(this.page.locator(usersLocator.option_employee)).toHaveText(employeeName);
        await this.page.locator(usersLocator.option_employee).click();

        await this.fillUserName(userName);

        await this.fillPasswords(password, password2);

        await this.submitForm();

    }

    async selectRole(){
        await this.page.locator(usersLocator.select_role).nth(0).click();
        await this.page.locator(usersLocator.option_role, { hasText: 'ESS' }).click();
    }

    async selectStatus(status){
        await this.page.locator(usersLocator.select_role).nth(1).click();
        await this.page.locator(usersLocator.option_role, { hasText: status }).click();
    }

    async fillEmployeeName(employeeName){
        await this.page.getByPlaceholder(usersLocator.placeholder_employee).fill(employeeName);
        await this.page.locator(usersLocator.option_employee).click();
    }

    async fillUserName(userName){
        const inputUser = await this.page.locator(usersLocator.input_userName, {hasText: 'Username'}).locator('input');
        await inputUser.focus();
        await inputUser.fill(userName);
    }

    async fillPasswords(password, password2){
        const inputPassword = await this.page.locator(usersLocator.input_password).nth(0);
        await inputPassword.fill(password);

        const confirmPassword = await this.page.locator(usersLocator.input_password).nth(1);
        await confirmPassword.fill(password2);
    }

    async openEditUser(userName){

        const row = await this.page.locator(usersLocator.row_admin, {hasText: userName});

        const button = row.locator(usersLocator.button_edit);
        await button.click();

        const title = await this.page.locator(usersLocator.title_edit);
        expect(title).toBeVisible();

    }

    async submitForm(){

        await this.page.locator(usersLocator.button_submit).click();
    }

    async goToForm(){
        await this.page.locator(usersLocator.addButton).click();
    }

    async removeUser(userName){

        const row = await this.page.locator(usersLocator.row_admin, {hasText: userName});

        const button = row.locator(usersLocator.button_remove);
        await button.click();

        const modal = await this.page.locator(usersLocator.confirmation_modal);
        await expect(modal).toBeVisible();

        const removal_confirmation = await this.page.locator(usersLocator.removal_confirmation).nth(1);
        await expect(removal_confirmation).toBeVisible();
        await removal_confirmation.click();

        await this.page.waitForSelector(usersLocator.row_admin);
        await expect(row).not.toBeVisible();

    }
}