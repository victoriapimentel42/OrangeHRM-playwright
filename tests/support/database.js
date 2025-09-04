require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,

})

 async function executeSQL(sql){
    try{
        const [rows]= await pool.execute(sql)
        return rows
    }catch(error){
        console.log('Erro ao executar Sql' + error)

    }
}

 module.exports ={executeSQL}