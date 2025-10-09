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

        await page.user.goToForm();

        const employee = await page.employeesBd.createEmployee();
        const employeeName = `${employee.firstName} ${employee.lastName}`;
        const userName = faker.string.alpha({length: 10});

        const password = faker.internet.password({length: 10, prefix:'#A1'});
        
        await page.user.createUser(employeeName,userName, password,password);

        await page.waitForSelector(usersLocator.row_admin);
        const row = page.locator(usersLocator.row_admin, {hasText: userName});

        await expect(row).toBeVisible();



    });

    test('Caso 02: Cadastro inválido- campos obrigatórios em branco',async({page}) => {

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();
        await page.user.submitForm();

        await page.span.haveText(['Required', 'Required', 'Required','Required','Required', 'Passwords do not match']);

    });

    test('Caso 03: Cadastro inválido - funcionário não existente', async({page}) => {

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();

        await page.user.fillEmployeeName(faker.person.firstName());
        await page.span.haveText(['Invalid']);


    });

    test('Caso 04: Cadastro inválido – nome de usuário com número de caracteres abaixo do mínimo permitido', async({page})=>{

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();

        await page.user.fillUserName(faker.string.alpha(4));
        await page.span.haveText('Should be at least 5 characters');

    });

    test('Caso 05: Cadastro válido - nome de usuário com número de caracteres no minimo permitido', async({page}) => {

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();

        const employee = await page.employeesBd.createEmployee();
        const userName = faker.string.alpha(5);
        const employeeName = `${employee.firstName} ${employee.lastName}`;

        const password = faker.internet.password({length: 10, prefix:'#A1'});

        await page.user.createUser(employeeName,userName, password,password);

        await page.waitForSelector(usersLocator.row_admin);
        const row = page.locator(usersLocator.row_admin, {hasText: userName});

        await expect(row).toBeVisible();
    });

    test('Caso 06: Cadastro inválido - nome de usuário com número de caracteres acima do máximo permitido', async ({page}) =>{

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();

        await page.user.fillUserName(faker.string.alpha(41));
        await page.span.haveText('Should not exceed 40 characters');

    });

    test('Caso 07: Cadastro válido - nome de usuário com número de caracteres no máximo permitido', async({page}) => {

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();

        const employee = await page.employeesBd.createEmployee();
        const userName = faker.string.alpha(40);
        const employeeName = `${employee.firstName} ${employee.lastName}`;

        const password = faker.internet.password({length: 10, prefix:'#A1'});

        await page.user.createUser(employeeName,userName, password,password);

        await page.waitForSelector(usersLocator.row_admin);
        const row = page.locator(usersLocator.row_admin, {hasText: userName});

        await expect(row).toBeVisible();

    });

    test('Caso 08: Cadastro inválido - nome de usuário já existente', async({page})=>{

        const user = await page.usersBd.createUser(1);

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();
        
        await page.user.fillUserName(user.userName);

        await page.span.haveText('Already exists');

    });

    test('Caso 09: Cadastro inválido - campo password com número de caracteres abaixo do mínimo permitido', async({page}) => {

        await page.login.visit();
        await page.login.do(admin.userName, admin.password);
        await page.dashboard.isLoggedIn()
        await page.dashboard.goToSystemUsers();

        await page.user.goToForm();

        const password = faker.internet.password({length: 3});
        await page.user.fillPasswords(password, password);

        await page.span.haveText('Should have at least 8 characters');
    });

});