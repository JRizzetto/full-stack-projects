import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "Entendido123!",
  database: "blog",
});
