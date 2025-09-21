import { expect } from "@playwright/test";

export class Span{
    
    constructor(page){
        this.page = page;
    }

    async haveText(text){
        const span = await this.page.locator('.oxd-input-field-error-message');
        await expect(span).toHaveText(text);
    }

}