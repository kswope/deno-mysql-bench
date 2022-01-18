import * as mysql from "mysql2/promise";
import assert from "assert/strict";

async function main() {
  const pool = await mysql.createPool({
    host: "localhost",
    user: "root",
    database: "deno_mysql_bench",
    connectionLimit: 10,
    queueLimit: 0,
  });

  console.time("time");
  let index = 0;
  for (; index < 10_000; index++) {
    let [rows] = await pool.query("select * from users");
    assert(rows.length === 9, "did query work???");
  }
  console.timeEnd("time");
  console.log("query count:", index);

  pool.end();
}

main();
