import { prompt, exibirMenu } from "../app.js";

let quantFC = 0

export function criarFlashcard(){
    console.clear()
    console.log("Qual a pergunta do flashcard?")
    let pergunta = prompt("> ")
    console.log("Qual a resposta?")
    let resposta = prompt("> ")
    quantFC++

    const flashcard = {
        pergunta: pergunta,
        resposta: resposta,
        id: quantFC
    }

    console.log("Flashcard criado com sucesso!")
    console.log("Deseja criar mais algum flashcard?\n1- Sim\nOutro- Sair")
    let opcao = prompt("")
    switch(opcao){
        case "1":
            criarFlashcard()
            break
        default:
            exibirMenu()
            break
    }
}