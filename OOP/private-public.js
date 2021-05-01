// A partir do ES 2020 temos a possibilidade de diferenciar atributos e métodos como públicos ou privados
class Personagem {
    #grana = 12 // use o # para declarar um atributo que é privado
    constructor(nome, arma) {
        this.nome = nome;
        this.arma = arma
    }
    atacar() {
        return this.nome + " ataca com " + this.#grana
    }
}

const rogerim = new Personagem("rogerim", "cultura")
console.log(rogerim.grana)