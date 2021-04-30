// Vamos sair de uma abordagem procedural e prosseguir até OOP (para mostrar seu poder)
// Como desculpa para explorar esses conceitos, vamos modelar os personagens de um jogo
// Todo jogo obviamente tem um Elfo
const elfo = {
    nome: "Malaco",
    arma: "garfo",
    atacar() {
        return "atacar com " + elfo.arma
    }
}

// Se você quiser outro elfo com outro nome, e for construir isso numa abordagem procedural, terá de fazer algo como
const elfo2 = {
    nome: "Mococa",
    arma: "chulé",
    atacar() {
        return "atacar com " + elfo2.arma
    }
}
// Bem inviável, né?
// Vamos melhorar um pouco com FACTORY FUNCTIONS

function criarElfo(nome, arma) {
    return {
        nome, //ES6 => se a propriedade e o valor tem o mesmo nome, basta colocar o nome delas uma vez (nome <=> (equivale a ) nome:nome, e assim por diante)
        arma,
        atacar() {
            return "atacar com " + arma
        }
    }
}

// Já melhorou... mas note que a cada elfo criado, temos uma nova função atacar! (que faz a mesma coisa, mas estamos a inicializando toda hora que o novo elfo for criado)
// Vamos melhorar mais um pouco com uma cadeia de prototipação

const metodosDeElfos = {
    atacar() {
        return "atacar com " + this.arma
    }
}

function criarElfo(nome, arma) {
    let novoElfo = Object.create(metodosDeElfos) 
    novoElfo.nome = nome
    novoElfo.arma = arma
    return novoElfo
} // Olha que legal!
// Isso funciona SUPER bem, mas isso AINDA não é OOP! E ainda, ninguém costuma fazer as coisas assim...
// Vamos nos aproximar mais um pouco usando Funções Construtoras!

// por convençao, construtoras são definidas com iniciais maiúsculas... 
function Elfo(nome, arma) {
    // quando usamos a palavra "ne" o contexto do this aqui é Elfo! não window
    this.nome = nome
    this.arma = arma
}
Elfo.prototype.atacar = function (){return this.nome + " ataca com " + this.arma} //cuidado para nao definir funções arrow quando estamos usando this! elas criam um contexto lexico!
const malaco = new Elfo("malaco", "cachimbo") // a palavrinha "new" é obrigatória aqui
console.log(malaco.atacar())
console.log(Elfo.prototype)

// Mas isso tudo é muito confuso, e de novo, A MAIORIA DOS DEVS nao usa esse "estilo" de OOP
// para continuar a jornada, veja o arquivo "paraiso-OOP.js"