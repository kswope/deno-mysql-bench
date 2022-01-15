import * as mysql from "mysql2/promise";
import assert from "assert/strict";

const client = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "deno_mysql_bench",
  connectionLimit: 10,
  queueLimit: 0,
});

console.time();
for (let index = 0; index < 10000; index++) {
  let [rows] = await client.query("select * from users");
  assert(rows.length === 9, "did query work???");
}
console.timeEnd();

client.end();
