import {createPool} from "mysql2/promise"; //El /promise es necesario para que se pueda hacer consultas asincronas

import{
    DB_HOST,
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
} from './../config/config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});