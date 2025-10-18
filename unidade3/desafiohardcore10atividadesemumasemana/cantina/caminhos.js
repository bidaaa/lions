import express from "express"
export const router = express.Router();

import { postItem } from "./modulacao/postItem.js";
import { listItems } from "./modulacao/listItem.js";
import { delItem } from "./modulacao/delItem.js";
import { attItem } from "./modulacao/attItem.js"

router.post("/itens", postItem)
router.get("/itens", listItems)
router.delete("/itens/:id", delItem)
router.put("/itens/:id", attItem)