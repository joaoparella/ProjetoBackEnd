class funcoesES{
    constructor(){
        this.prompt = require('prompt-sync')();
    }
    entrada(mensagem){
        return this.prompt(mensagem+": ");
    }
    mensagemSimples(mensagem){
        console.log(mensagem);
    }
    mensagemCompleta(mensagem){
        console.log("********************************");
        console.log(mensagem);
        console.log("********************************");
    }
}

module.exports = funcoesES;