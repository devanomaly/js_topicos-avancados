// Os 4 pilares/fundamentos da orientação a objetos (PEAH)
// Polimorfismo => um mesmo método pode se comportar de várias formas; cada objeto pode responder de maneiras distintas
// Encapsulamento => guardar coisas em caixas (classes e objetos), classificar, universalizar métodos etc
// Abstração => esconder a complexidade! (para dirigir um carro você não precisa saber engenharia mecânica)
// Herança => reuso de código, reuso de ideias, cadeias de relações


// Vamos melhorar um pouco a discussão de polimorfismo 
class Personagem {
    constructor(nome, arma) {
        this.nome = nome;
        this.arma = arma
    }
    atacar() {
        return this.nome + " ataca com " + this.arma
    }
}
class Elfo extends Personagem {
    constructor(nome, arma, tipo) {
        super(nome, arma)
        this.tipo = tipo
    }
    atacar(grito){
        return "ataca com " + grito
    }
}
class Ogro extends Personagem {
    constructor(nome, arma, cor) {
        super(nome, arma)
        this.cor = cor
    }
    arrotar() {
        return this.nome + " soltou um arrotão!"
    }
    atacar(){
        return "aarrghhh"
    }
}
const beicola = new Elfo("Beiçola", "sensualidade", "pasteleiro")
console.log(beicola.atacar("óleo fervente"))
const marilda = new Ogro("Marilda", "cabelo", "cabeleireira")
console.log(marilda.atacar())

// Para finalizar, perceba: OOP é um paradigma que
// fornece codigo limpo e INTELIGÍVEL
// facilita implementações com eficiência no uso de memória
// leva o princípio DRY (Don't Repeat Yourself) muito a sério
// é fácil de manter e entender.