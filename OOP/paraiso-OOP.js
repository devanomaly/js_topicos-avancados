// A partir do ES6, JS adotou a palavra-chave "class"
// Mas por baixo dos panos, ainda é herança prototípica!

class Elfo {
    constructor(nome, arma) {
        // o método "constructor" é disparado sempre que um novo objeto for criado
        this.nome = nome;
        this.arma = arma
    }
    atacar(){
        // note que os métodos ficam fora do construtor, para que não tenhamos de construí-los toda vez!
        return this.nome + " ataca com " + this.arma
    }
}

const pedrim = new Elfo("pedrim", "alcool-gel") // "new" => criar uma nova instância daquela classe; criar um objeto
console.log(pedrim.atacar());
