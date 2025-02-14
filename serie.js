import filme from "./filme.js"

export default class serie extends filme{
    constructor(nome, duracao, sinopse,ano,nomeSerie,episodio,temporada){
        super(nome,duracao,sinopse,ano)
        this.nomeSerie = nomeSerie;
        this.episodio = episodio;
        this.temporada = temporada;
    }

    compartilhar(){
        return "Estou assistindo a serie "+ this.nomeSerie + " episódio " + this.episodio+
                " da temporada "+this.temporada+
                " que conta a seguinte história: "+this.sinopse+
                ". Foi lançado em "+this.ano+" e tem duração de "+this.duracao+" minutos."
    }

    assistir(){
        return "Assistindo o episódio " + this.episodio + " da temporada "+this.temporada+
        " da serie"+this.nomeSerie+" - Tempo restante -> "+this.duracao +" minutos."
    }
}