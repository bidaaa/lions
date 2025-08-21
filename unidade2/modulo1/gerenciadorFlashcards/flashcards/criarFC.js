import { prompt, exibirMenu, baralhos, flashcards } from "../app.js";

let quantFC = 0
let idBaralho = ""

export function criarFlashcard(){
    console.clear()
    console.log("Qual a pergunta do flashcard?")
    let pergunta = prompt("> ")
    console.log("Qual a resposta?")
    let resposta = prompt("> ")
    quantFC++
    console.log("Qual o nome do baralho que deseja adicionar esse flashcard?")
    let deck = prompt("> ")
    deck = deck.toLowerCase()
    baralhos.forEach((baralho) => {
        if(deck == baralho.nome){
            idBaralho = baralho.id
        } else {
            console.log("Baralho não encontrado no sistema.")
            console.log("Pressione enter para começar novamente.")
            let opcao = prompt("")
            switch(opcao){
                default:
                    criarFlashcard()
                    break
            }

            criarFlashcard()
        }
    })

    const flashcard = {
        pergunta: pergunta,
        resposta: resposta,
        idFlashcard: quantFC,
        idBaralho: idBaralho
    }

    flashcards.push(flashcard)

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