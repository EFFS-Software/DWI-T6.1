import express from "express";
const app = express();
import { apiServer } from "./routes/apiServer.js";

//Middleware
app.use(express.json);
//Validación de servidor en la nube.
app.use('/', apiServer);

app.listen(3000, () => {
  console.log('Server on Port', 3000);
});