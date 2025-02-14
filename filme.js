export default class filme{
    constructor(nome, duracao, sinopse,ano){
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.ano = ano;
    }

    compartilhar(){
        return "Estou assistindo o filme "+ this.nome +
                " que conta a seguinte história: "+this.sinopse+
                ". Foi lançado em "+this.ano+" e tem duração de "+this.duracao+" minutos."
    }

    assistir(){
        return "Assistindo o filme "+this.nome+" - Tempo Restante -> "+this.duracao+" minutos."
    }
}