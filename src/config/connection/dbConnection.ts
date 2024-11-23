import dotenv from "dotenv";
import pgPromise from "pg-promise";
import { optionsPG } from "./optionsPG";

dotenv.config({ path: "variables.env" });

const HOST_F = String(process.env.HOST);
const PORT_F = Number(process.env.PORT);
const DB_F = String(process.env.DB);
const DB_USER_F = String(process.env.DB_USER);
const DB_PASSWORD_F = String(process.env.DB_PASSWORD);

const pgp = pgPromise(optionsPG);

const pool = pgp({
  user: DB_USER_F,
  host: HOST_F,
  password: DB_PASSWORD_F,
  database: DB_F,
  port: PORT_F,
});

pool
  .connect()
  .then((miConn) => {
    console.log("Conectado a la base de datos ", DB_F);
    miConn.done();
  })
  .catch((miError) => {
    console.log("ERROR: ", miError);
  });

export default pool;
