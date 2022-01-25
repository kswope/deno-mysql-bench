import { Client } from "https://deno.land/x/postgres/mod.ts";
import { assert } from "https://deno.land/std@0.121.0/testing/asserts.ts";

async function main() {
  const client = new Client({
    user: "kevin",
    database: "deno_mysql_bench",
    hostname: "localhost",
    port: 5432,
  });
  await client.connect();

  console.time("time");
  let index = 0;
  for (; index < 10_000; index++) {
    let result = await client.queryArray("select * from users");
    assert(result.rows.length === 9, "did query work???");
  }
  console.timeEnd("time");
  console.log("query count:", index);

  client.end();
}

main();
