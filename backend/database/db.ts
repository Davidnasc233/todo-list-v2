import dotenv from 'dotenv';
import knex, { Knex } from 'knex';

dotenv.config();

export const db: Knex = knex({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    migrations: {
        directory: './migrations',
    },
});

export default db;