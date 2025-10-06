import { expect } from "@playwright/test";
import { dashboardLocator } from "../../locators/dashboard.locators";
import { usersLocator } from "../../locators/users.locators";
const data = require('../fixtures/admin.json');

 const admin = data.main_user;

export class Dashboard{

    
    constructor(page){
        this.page = page;
    }
   

    async isLoggedIn(){

        const userName = await this.page.locator(dashboardLocator.userDropdown);
        await expect(userName).toHaveText(admin.employeeName);

    }

    async goToSystemUsers(){

        await this.page.locator(dashboardLocator.menuUsers).click();
        const title = this.page.locator(usersLocator.title);
        await expect(title).toBeVisible();
    }


}