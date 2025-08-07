import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });

function caesarCipher(palavra, avancar){
    let palavraCriptografada = ""

    for(let i = 0; i<palavra.length; i++){
        const letra = palavra[i]
        const codigo = letra.charCodeAt()

        if(codigo >= 65 && codigo <= 90){
            const novoCodigo = ((codigo - 65 + avancar) % 26) + 65
            palavraCriptografada += String.fromCharCode(novoCodigo)
        }
        else if(codigo >= 97 && codigo <= 122){
            const novoCodigo = ((codigo - 97 + avancar) % 26) + 97
            palavraCriptografada += String.fromCharCode(novoCodigo)
        }
        else{
            palavraCriptografada += letra
        }
    }
    return palavraCriptografada
}

function encryptSentenceWithCaesarCipher(){
    let frase = prompt("Qual a frase que deseja criptografar?  ")
    let avancar = prompt("Quantos caracteres deseja avançar?  ")
    avancar = parseInt(avancar)

    const palavras = frase.split(' ')
    const palavrasCriptografadas = palavras.map(palavra => caesarCipher(palavra, avancar))

    let fraseCriptografada = palavrasCriptografadas.join(' ')

    console.log(fraseCriptografada)
}

encryptSentenceWithCaesarCipher()