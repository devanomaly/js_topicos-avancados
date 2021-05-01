// o contexto "bind" => ligar as coisas
function Person(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const pessoa1 = new Person("Quelemém", 53)
console.log(pessoa1);
// binding implicito
const pessoa2 = {
    nome: "Sicleide",
    idade: 40,
    olar() {
        console.log(olar + this.nome);
    }
}
console.log(pessoa2.olar());
// binding explícito
const pessoa3 = {
    nome: "Diadorim",
    idade: 40,
    olar: function () {
        console.log(olar + this.setTimeout);
    }.bind(window) //binding explícito => call, apply e bind fazem esse tipo de coisa
}
console.log(pessoa3.olar());
// arrow functions
const pessoa4 = {
    nome: "Riobaldo",
    idade: 40,
    olar: function () {
        var deDentro = () => {
            console.log(olar + this.nome);
            // o contexto do this entra no contexto léxico, e não na window, porque a função arrow está sendo utilizada dentro de uma outra função!
        }
        return deDentro()
    } //binding explícito => call, apply e bind fazem esse tipo de coisa
}
console.log(pessoa4.olar());

// daqui, prossiga ao arquivo "heranca.js"