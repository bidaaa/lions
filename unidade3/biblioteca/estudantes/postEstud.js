export let estudantes = []
let id = 0

export function postEstud(req,res){
    const { nome, matricula, curso, ano } = req.body
    if(!nome||!matricula||!curso||!ano){
        return res.status(400).send("Você precisa cadastrar todas as informações do estudante.")
    }
    id++
    const estudante = {
        id,
        nome,
        matricula,
        curso,
        ano
    }

    estudantes.push(estudante)
    res.status(201).send("Estudante cadastrado com sucesso!")
}