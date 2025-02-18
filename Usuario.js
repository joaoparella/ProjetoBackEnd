import { Datas } from "./datas.js"; 

export class Usuario{
    #senha
    constructor(nome,email,senha){
        this.datas = new Datas();
        this.nome = nome;
        this.email = email;
        var resultadoSenha = this.trocarSenha(senha)
        this.assinatura = this.datas.dataAtual();
        return resultadoSenha;
    }

    

    set senha(senhaNova){
        this.trocarSenha(senhaNova);
    }

    fazerLogin(email,senha){
        if(email == this.email){
            if(senha == this.#senha){
                return "Login efetuado com sucesso"
            }else{
                return "Login inválido" 
            }
        }else{
            return "Login inválido"
        }
    }

    trocarSenha(senhaNova){
        var tamanho = senhaNova.length >= 8;
        var temNumeros = /\d/.test(senhaNova)
        var temMaiusculo = /[A-Z]/.test(senhaNova)
        var temMinusculo = /[a-z]/.test(senhaNova)
        if(tamanho && temMaiusculo && temMinusculo && temNumeros){
            this.#senha = senhaNova;
            return "Senha atualizada"
        }else{
            return "Senha fraca"
        }
        
    }
    
    validarAssinatura(){
        return this.datas.diferencaDias(this.assinatura);
    }

    adicionarAssinatura(dias){
        this.assinatura = this.datas.adicionarDias(this.assinatura, dias)
    }
}
