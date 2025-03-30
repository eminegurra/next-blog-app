import mysql from 'mysql2/promise';


// A pool is like a group of reusable database connections.
// Instead of opening a new connection every time your app talks to the database 
// (which is slow), the pool gives you an already-open connection.

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;



