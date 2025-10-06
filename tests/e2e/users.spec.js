import { test, expect } from "../support";
import { executeSQL } from "../support/database";
const data =require('../support/fixtures/admin.json');
import { faker } from '@faker-js/faker';
import { usersLocator } from "../locators/users.locators";

test.beforeAll(async() => {
    await executeSQL(`DELETE FROM ohrm_user where id <> 1`);
    await executeSQL(`DELETE FROM hs_hr_employee where emp_number <> 1`);
 });

test.describe('Cadastro de usuário', () => {

    const admin = data.main_user;
    test('Caso 01: Cadastro de usuário com sucesso', async({page}) => {

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        const employee = await page.employeesBd.createEmployee();
        const userName = faker.string.alpha({length: 10});
        const prefixo = '#A';
        const text = faker.string.alphanumeric(10);
        const password = `${prefixo}${text}`

        await page.user.createUser(employee.firstName,userName, password,password);

        const collum = page.locator(usersLocator.collum_admin);
        await page.waitForSelector(usersLocator.collum_admin);
        const rows = page.locator(usersLocator.row_admin);
        const row = rows.last();

        const adminName = row.locator(collum).nth(1);

        await expect(adminName).toHaveText(userName);
        await expect(adminName).toBeVisible(userName);



    });

});