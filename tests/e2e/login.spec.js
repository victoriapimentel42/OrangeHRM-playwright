import { test, expect } from "../support";
import { executeSQL } from "../support/database";
const data = require('../support/fixtures/admin.json');

test.beforeAll(async() => {
    await executeSQL(`DELETE FROM ohrm_user where id <> 1`);
    await executeSQL(`DELETE FROM hs_hr_employee where emp_number <> 1`);
 })

test('Caso 01: Login com credenciais válidas', async({page}) =>{

    const admin = data.main_user;

    await page.login.visit();
    await page.login.do(admin.userName, admin.password);
    await page.home.isOnHome();
    
});

test('Caso 02: Login inválido- campos em branco', async({page}) => {

    await page.login.visit();
    await page.login.do('', '');
    await page.span.haveText(['Required', 'Required']);


});

test('Caso 03: Login inválido- campo username em branco', async({page}) => {
    await page.login.visit();
    await page.login.do('', '#Admin123456');
    await page.span.haveText('Required');
});

test('Caso 04: Login inválido - campo senha em branco', async({page}) => {
    await page.login.visit();
    await page.login.do('admin', '');
    await page.span.haveText('Required');
});

test('Caso 05: Login inválido - senha inválida', async({page}) => {
    await page.login.visit();
    await page.login.do('admin', 'teste');
    await page.login.alertHaveText('Invalid credentials');
});

test('Caso 06: Login inválido - username inválido', async({page}) => {
    await page.login.visit();
    await page.login.do('teste', '#Admin123456');
    await page.login.alertHaveText('Invalid credentials');
});

test('Caso 07: Login inválido - usuario desabilitado', async({page}) => {

    const disabledUser = await page.usersBd.createUser(0);
    await page.login.visit();
    await page.login.do(disabledUser.username, disabledUser.password);

    await page.login.alertHaveText('Account disabled');

})