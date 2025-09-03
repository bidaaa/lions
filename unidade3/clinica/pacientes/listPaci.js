import { pacientes } from "./postPaci.js";

export function listPaci(req,res){
    res.status(200).json(pacientes)
}