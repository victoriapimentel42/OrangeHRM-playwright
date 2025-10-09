

const { pool } = require('../database');
const { faker } = require('@faker-js/faker');
const { test, expect } = ('../support');
const { EmployeesBd } = require('./EmployeesBd');
const bcrypt = require('bcrypt');


export class UsersBd{

    constructor(page){
        this.page = page;
        this.employeesBd = new EmployeesBd();
        
    }

    async createUser(status){
        const employee = await this.employeesBd.createEmployee();
        const idEmployee = employee.id;
        const userRole = 1;
        const userName = faker.person.fullName();
        const password = "#Admin123456";
        const creatorId = 1;

        const hashedPassword = await bcrypt.hash(password, 10);


        const [resultado] = await pool.execute(
            `INSERT INTO ohrm_user (user_role_id,emp_number,user_name,user_password, status, created_by) VALUES (?,?,?,?,?,?)`, [userRole,idEmployee,userName,hashedPassword,status,creatorId]
        );

       return {
        id: resultado.insertId,
        username: userName,
        password: password,
        userName: userName 
        }

    }
}