const db = require('mysql2');
require('dotenv').config();

const table = process.env.TABLE;
const pool = db.createPool({
	host: process.env.DB_HOST,
	user: process.env.USER_NAME,
	password: process.env.DB_KEY,
	database: process.env.DB_NAME,
	connectionLimit: 10
}).promise();

module.exports.account = async () =>{
	let [a] = await pool.query(`select * from ${table}`);
	console.log(a);
	return a;
}