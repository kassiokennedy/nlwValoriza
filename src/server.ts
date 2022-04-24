
import "reflect-metadata"
import express, { response } from "express"
import { router } from "./services/routes";

import "./database"

const app = express();
app.use(express.json)
// http://localhost:3000
app.listen(3000,()=>console.log("Server is running!!!"))
app.use(router)