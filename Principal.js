const usuario = require('./Usuario.js')
const entradaSaida = require('./EntradaSaida.js')


const usuario1 = new usuario("Roberval","Roberval@bol.com","senhadificil123")
const ES = new entradaSaida();

// usuario1.nome= "roberval da silva"

// var login = ES.entrada("Digite o usuário:")
// var senha = ES.entrada("Digite a senha:")

// ES.mensagemCompleta(usuario1.fazerLogin(login,senha))

ES.mensagemCompleta(usuario1.validarAssinatura())
usuario1.adicionarAssinatura(10)
ES.mensagemCompleta(usuario1.validarAssinatura())