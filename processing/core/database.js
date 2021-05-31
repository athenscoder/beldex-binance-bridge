import config from 'config';
import { Database, clients } from 'bridge-core';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import dotenv from 'dotenv';
dotenv.config();

const { host, port, database, user, password, ssl } = config.get('database');

export const postgres = new clients.PostgresClient({ host, port, database, user, password, ssl });
// export const postgres = new clients.PostgresClient({
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT,
//     database: process.env.POSTGRES_DATABASE,
//     user: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     ssl: process.env.POSTGRES_SSL
// });
export const db = new Database(postgres);

const adapter = new FileSync(`localdb-${process.env.NODE_ENV}.json`);
export const localDB = low(adapter);
