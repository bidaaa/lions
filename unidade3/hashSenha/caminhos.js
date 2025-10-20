import express from "express"
export const router = express.Router();

import { addUser } from "./funcoes/addUser.js";

router.post("/user", addUser)