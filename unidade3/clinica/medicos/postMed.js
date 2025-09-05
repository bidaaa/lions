export let idM = 0
export let medicos = []

export function postMed(req,res){
    const {nome, especialidade} = req.body
    if(!nome||!especialidade){
        return res.status(400).send("Você deve inserir todos os dados dos médicos")
    }
    idM++
    const medico = {
        id: idM,
        nome,
        especialidade
    }
    medicos.push(medico)
    res.status(201).send("Médico cadastrado com sucesso.")
}