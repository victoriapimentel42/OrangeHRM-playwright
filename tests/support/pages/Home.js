import { expect } from "@playwright/test";
import { homeLocator } from "../../locators/home.locators";
export class Home{

    constructor(page){
        this.page = page;
    }

    async isOnHome(){
       const heading = await this.page.getByRole(homeLocator.heading.role, {name:homeLocator.heading.name});
       await expect(heading).toBeVisible();
    }

}