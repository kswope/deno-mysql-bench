import { Client as MySQLClient } from "https://deno.land/x/mysql/mod.ts";
import { assert } from "https://deno.land/std@0.121.0/testing/asserts.ts";

let client = await new MySQLClient().connect({
  hostname: "localhost",
  username: "root",
  db: "deno_mysql_bench",
  poolSize: 10,
});

console.time();
for (let index = 0; index < 10000; index++) {
  let rows = await client.query("select * from users");
  assert(rows.length === 9, "did query work???");
}
console.timeEnd();

client.close();
