const { pool } = require('../database');
const { faker } = require('@faker-js/faker');



export class EmployeesBd{

    constructor(page){
        this.page = page;
    }

    async createEmployee(){

    const lastName = faker.person.lastName();
    const firstName = faker.person.firstName();
    const employeeId = faker.number.int({ min: 100, max: 999 });

    const [resultado] = await pool.execute(
         `INSERT INTO hs_hr_employee (employee_id, emp_lastname, emp_firstname) VALUES (?, ?, ?)`,[employeeId, lastName, firstName]
    );

    return {
            id: resultado.insertId,
            firstName,
            lastName
        };

}

}
