import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as router from "./routes/covidFrom"
const app = express();
const main = express();

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));
main.use('/api/v1', app);
app.use("/forms",router.router);

export const webApi = functions.https.onRequest(main);


export {app};