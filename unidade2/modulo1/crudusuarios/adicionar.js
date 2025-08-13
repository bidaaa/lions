import { exibirMenu, prompt, usuarios, telefones } from "./app.js"

export function adicionarUsuario(){
    console.clear()
    let id = Date.now()
    console.log("Digite o nome do usuário que deseja cadastrar")
    let nome = prompt("> ")
    console.log("Digite o email do usuário")
    let email = prompt("> ")
    addTelefone(id, nome, email, [])
}

function addTelefone(id, nome, email, telefones){
    console.log("Digite o(s) telefone(s) do usuário")
    let telefone = prompt("> ")
    telefones.push(telefone)
    console.log("Número adicionado!")
    console.log("Deseja adicionar mais algum número?\n1-Sim\nOutro-Não")
    let opcao = prompt("> ")
    switch(opcao){
        case "1":
            console.clear()
            addTelefone(id, nome, email, telefones)
            break
        default:
            const usuario = {
                nome: nome,
                email: email,
                id: id,
                telefones: telefones, 
            }
            console.clear()
            usuarios.push(usuario)
            console.log("Usuário cadastrado.")
            exibirMenu()
            break
    }
}