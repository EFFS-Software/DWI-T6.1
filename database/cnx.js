import pg from "pg-promise";
const pgp = pg();
import dotenv from "dotenv";
dotenv.config();

const user = process.env._USER;
const pass = process.env._PASS;
const host = process.env._HOST;
const database = process.env._DATABASE;

const encodedPass = encodeURIComponent(pass);
const connectionString = `postgres://${user}:${encodedPass}@${host}:5432/${database}?ssl=true`;
const db = pgp(connectionString);

db.connect()
  .then(() => {
    console.log("Conexión exitosa");
  })
  .catch((err) => {
    console.log(`Error de conexión: ${err}`);
  });

export { db };