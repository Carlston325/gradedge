import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const password = String(process.env.DATABASE_PASSWORD);
const port = Number(process.env.DATABASE_PORT);

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: password,
  port: port,
});

export default pool;
