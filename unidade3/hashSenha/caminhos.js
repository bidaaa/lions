import express from "express"
export const router = express.Router();

import { addUser } from "./funcoes/addUser.js";
import { loginUser } from "./funcoes/loginUser.js";
import { getUser } from "./funcoes/getUser.js";
import { authUser } from "./funcoes/authUser.js";
import { deleteUser } from "./funcoes/deleteUser.js";

router.post("/user", addUser)
router.post("/login", loginUser)
router.get("/user", authUser, getUser)
router.delete("/user", deleteUser)