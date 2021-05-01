class Personagem {
    constructor(nome, arma) {
        this.nome = nome;
        this.arma = arma
    }
    atacar() {
        return this.nome + " ataca com " + this.arma
    }
}
// Vamos criar uma classe chamada Elfo herdando da classe Personagem

class Elfo extends Personagem {
    constructor(nome, arma, tipo) {
        super(nome, arma)
        this.tipo = tipo
    }
}
const jeremias = new Elfo("Jeremias", "copinho de shot", "pinguço")
console.log((jeremias));
console.log((jeremias.atacar()));

// Queremos outra classe: Ogro.
// Sem problema!
class Ogro extends Personagem {
    constructor(nome, arma, cor) {
        super(nome, arma)
        this.cor = cor
    }
    arrotar() {
        return this.nome + " soltou um arrotão!"
    }
}

const ogroVioleta = new Ogro("ogro violeta", "um lobo mau vesgo", "violeta")
console.log((ogroVioleta));
console.log((ogroVioleta.atacar()));
console.log((ogroVioleta.arrotar()));