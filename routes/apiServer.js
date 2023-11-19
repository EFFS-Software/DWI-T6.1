import { getServer, getDateServer } from '../controllers/apiServerController.js';
import express from "express";
const apiServer = express();

apiServer.get('/', getServer);
apiServer.get('/date', getDateServer);

export { apiServer };