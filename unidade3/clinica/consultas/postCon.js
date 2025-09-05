export let consultas = []
let idC = 0

export function postCon(req,res){
    const { data, idM, idP, desc } = req.body
    if(!data||!idM||!idP||!desc){
        return res.status(400).send("Você precisa cadastrar todas as informações da consulta.")
    }
    idC++
    const consulta = {
        id: idC,
        data,
        idM,
        idP,
        desc
    }

    consultas.push(consulta)
    res.status(201).send("Consulta cadastrada com sucesso!")
}