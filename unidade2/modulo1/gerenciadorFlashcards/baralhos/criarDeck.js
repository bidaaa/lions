import { prompt, exibirMenu } from "../app.js";

let quantBaralho = 0

export function criarBaralho(){
    console.clear()
    console.log("Qual o nome do baralho?")
    let nome = prompt("> ")
    nome = nome.toLowerCase()
    quantBaralho++
    const baralho = {
        nome: nome,
        id: quantBaralho
    }

    console.log("Baralho criado com sucesso!")
    console.log("Deseja criar mais algum baralho?\n1- Sim\nOutro- Sair")
    let opcao = prompt("")
    switch(opcao){
        case "1":
            criarBaralho()
            break
        default:
            exibirMenu()
            break
    }
}