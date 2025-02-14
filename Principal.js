import { funcoesES } from "./EntradaSaida.js";
import filme from "./filme.js";
import serie from "./serie.js";
import { Usuario } from "./Usuario.js";

// const usuario1 = new Usuario("Roberval","Roberval@bol.com","senhadificil123")
const ES = new funcoesES();

// usuario1.nome= "roberval da silva"

// var login = ES.entrada("Digite o usuário:")
// var senha = ES.entrada("Digite a senha:")

// ES.mensagemCompleta(usuario1.fazerLogin(login,senha))

// ES.mensagemCompleta(usuario1.validarAssinatura())
// usuario1.adicionarAssinatura(10)
// ES.mensagemCompleta(usuario1.validarAssinatura())

const filme1 = new filme('Harry potter',180,'Um bruxo vai para a escola',2006);
const serie1 = new serie('Episodio piloto',30,'A historia de um MC',2021,'Sintonia','01','01')

ES.mensagemCompleta(filme1.compartilhar())
ES.mensagemCompleta(serie1.compartilhar())