// A partir do ES6, JS adotou a palavra-chave "class"

class Elfo {
    constructor(nome, arma) {
        // o método "constructor" é disparado sempre que um novo objeto for criado
        this.nome = nome;
        this.arma = arma
    }
    atacar(){
        return this.nome + " ataca com " + this.arma
    }
}

const pedrim = new Elfo("pedrim", "alcool-gel")
console.log(pedrim.atacar());