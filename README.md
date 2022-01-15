# deno-mysql-bench

```
create database deno_mysql_bench

use deno_mysql_bench

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

insert into users (id, email, password) values (1, "me01@example.com", "changeme");
insert into users (id, email, password) values (2, "me02@example.com", "changeme");
insert into users (id, email, password) values (3, "me03@example.com", "changeme");
insert into users (id, email, password) values (4, "me04@example.com", "changeme");
insert into users (id, email, password) values (5, "me05@example.com", "changeme");
insert into users (id, email, password) values (6, "me06@example.com", "changeme");
insert into users (id, email, password) values (7, "me07@example.com", "changeme");
insert into users (id, email, password) values (8, "me08@example.com", "changeme");
insert into users (id, email, password) values (9, "me09@example.com", "changeme");

```

deno-mysql-bench> deno run --allow-net ./deno/index.ts
INFO connecting localhost:3306
INFO connected to localhost:3306
default: 7402ms
INFO close connection
deno-mysql-bench> node node/index.js
default: 996.609ms