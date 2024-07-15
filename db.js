import pg from 'pg';

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "",
  port: 5432,
});
db.connect();

export default db;