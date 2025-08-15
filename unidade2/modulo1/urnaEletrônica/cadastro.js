import { prompt, numsCandidato, candidatos, exibirMenu } from "./app.js";

export function cadastroCandidato(){
    console.log("Bem-vindo ao sistema de cadastro de candidatos!\nPor favor insira o nome completo:\n")
    let nome = prompt("> ")
    console.log("Agora, insira o número de votação.\n")
    let numCandidato = prompt("> ")
    numsCandidato.forEach((index) => {
        if(numCandidato == index){
            console.log("Este número já está em uso, tente outro.")
            cadastroCandidato()
        } else {
            numsCandidato.push(numCandidato)
        }
    })
    console.log("Agora insira o partido (nome completo)\n")
    let partido = prompt("> ")
    console.log("E agora, a sigla do partido\n")
    let sigla = prompt("> ")
    let id = candidatos.length + 1

    let candidato = {
        nome: nome,
        numCandidato: numCandidato,
        partido: partido,
        sigla: sigla,
        id: id
    }
    candidatos.push(candidato)

    console.log("Candidato cadastrado!\nDeseja adicionar mais algum?\n1- Sim\nOutro- Não\n")
    let opcao = prompt("> ")
    switch(opcao){
        case "1":
            cadastroCandidato()
            break
        default:
            exibirMenu()
            break
    }
}