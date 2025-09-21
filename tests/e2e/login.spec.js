import { test, expect } from "../support";
import { createEmployee, executeSQL } from "../support/database";

test.beforeAll(async() => {
    await executeSQL(`DELETE FROM ohrm_user where id <> 1`);
    await executeSQL(`DELETE FROM hs_hr_employee where emp_number <>1`);
 })

test('Login deve ser realizado com sucesso ao logar com senha e nome válido', async({page}) =>{

    await page.login.visit();
    await page.login.do('admin', '#Admin123456');
    await page.home.isOnHome();
    
});

test('Login inválido- campos em branco', async({page}) => {

    await page.login.visit();
    await page.login.do('', '');
    await page.span.haveText(['Required', 'Required']);


});

test('Login inválido- campo username em branco', async({page}) => {
    await page.login.visit();
    await page.login.do('', '#Admin123456');
    await page.span.haveText('Required');
});

test('Login inválido - campo senha em branco', async({page}) => {
    await page.login.visit();
    await page.login.do('admin', '');
    await page.span.haveText('Required');
});

test('Login inválido - senha inválida', async({page}) => {
    await page.login.visit();
    await page.login.do('admin', 'teste');
    await page.login.alertHaveText('Invalid credentials');
});

test('Login inválido - username inválido', async({page}) => {
    await page.login.visit();
    await page.login.do('teste', '#Admin123456');
    await page.login.alertHaveText('Invalid credentials');
});

test('Login inválido - usuario desabilitado', async({page}) => {

    const disabledUser = await page.usersBd.createUser(0);
    await page.login.visit();
    await page.login.do(disabledUser.username, disabledUser.password);

    await page.login.alertHaveText('Account disabled');

})