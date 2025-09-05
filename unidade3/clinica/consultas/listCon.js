import { consultas } from "./postCon.js";

export function listCon(req,res){
    res.status(200).json(consultas)
}