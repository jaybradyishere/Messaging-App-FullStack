const { Pool } = require("pg");

if (!global.pool) {
  global.pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
}

const pool = global.pool;

module.exports = {
  query: (text, params) => pool.query(text, params),
};
