import mysql from "mysql2/promise";

// Create the connection to database
const dbConnection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "M@9411579070ac",
  database: "dummyDatabase",
});

dbConnection.connect((err) => {
  if (err) {
    console.log("connection error");
    return;
  } else {
    console.log("connected successfully");
  }
});

export { dbConnection };
