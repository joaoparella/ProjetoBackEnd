import { Datas } from "./datas.js"; 

export class Usuario{
    constructor(nome,email,senha){
        this.datas = new Datas();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.assinatura = this.datas.dataAtual();
    }

    fazerLogin(email,senha){
        if(email == this.email){
            if(senha == this.senha){
                return "Login efetuado com sucesso"
            }else{
                return "Login inválido" 
            }
        }else{
            return "Login inválido"
        }
    }
    
    validarAssinatura(){
        return this.datas.diferencaDias(this.assinatura);
    }

    adicionarAssinatura(dias){
        this.assinatura = this.datas.adicionarDias(this.assinatura, dias)
    }
}
