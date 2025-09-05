import express from 'express'
const app = express()
const router = express.Router();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

import { postPaci } from './pacientes/postPaci.js';
import { listPaci } from './pacientes/listPaci.js';
import { delPaci } from './pacientes/delPaci.js';
import { attPaci } from './pacientes/attPaci.js';
import { postMed } from './medicos/postMed.js';
import { listMed } from './medicos/listMed.js'
import { delMed } from './medicos/delMed.js';
import { attMed } from './medicos/attMed.js'


router.post("/pacientes", postPaci)
router.get("/pacientes", listPaci)
router.delete("/pacientes/:id", delPaci)
router.patch("/pacientes/:id", attPaci)
router.post("/medicos", postMed)
router.get("/medicos", listMed)
router.delete("/medicos/:id", delMed)
router.patch("/medicos/:id", attMed)



router.get("/",(req,res) => {
    res.send("API funcionando")
})
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http:///localhost:${port}`)
})