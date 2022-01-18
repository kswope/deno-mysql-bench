import { Client as MySQLClient } from "https://deno.land/x/mysql/mod.ts";
import { assert } from "https://deno.land/std@0.121.0/testing/asserts.ts";

async function main() {
  let pool = await new MySQLClient().connect({
    hostname: "localhost",
    username: "root",
    db: "deno_mysql_bench",
    poolSize: 10,
  });

  console.time("time");
  let index = 0;
  for (; index < 10_000; index++) {
    let rows = await pool.query("select * from users");
    assert(rows.length === 9, "did query work???");
  }
  console.timeEnd("time");
  console.log("query count:", index);

  pool.close();
}

main();
