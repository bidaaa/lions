import express from "express"
export const router = express.Router();

import { postItem } from "./modulacao/postItem.js";

router.post("/itens", postItem)