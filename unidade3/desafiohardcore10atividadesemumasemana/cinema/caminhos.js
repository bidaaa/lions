import express from "express"
export const router = express.Router();

import { postMovie } from "./modulacao/postMovie.js";
import { listMovie } from "./modulacao/listMovie.js";
import { attMovie } from "./modulacao/attMovie.js";
import { delMovie } from "./modulacao/delMovie.js";

router.post('/filmes', postMovie)
router.get('/filmes', listMovie)
router.put('/filmes', attMovie)
router.delete('/filmes', delMovie)