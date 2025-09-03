import { medicos } from "./postMed.js";

export function listMed(req,res){
    res.status(200).json(medicos)
}