import { prompt, exibirMenu, flashcards } from "../app.js";

export function listarFlashcards() {
  console.clear();
  flashcards.forEach((flashcard) => {
    console.log(`Pergunta: ${flashcard.pergunta} || Resposta: ${flashcard.resposta} || ID: ${flashcard.idFlashcard} || ID do baralho ao qual ele pertence: ${flashcard.idBaralho}`);
  });
  console.log("\nPressione enter para voltar ao menu.");
  let opcao = prompt("");
  switch (opcao) {
    default:
      exibirMenu();
      break;
  }
}
