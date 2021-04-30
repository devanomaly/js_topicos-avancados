// valor vs referencia
// TODO: o que ocorre com const e etc? TS muda como essas coisas funcionam?
const objeto1 = { valor: { okay: 3 } } //nova entidade
const objeto2 = objeto1 // referencia à entidade objeto1
const objeto3 = { valor: { okay: 3 } } // nova entidade

// contexto (this) [escopo é criada quando temos chaves...]
console.log(this) //diz onde estamos
function a() {
    console.log(this); //vai dar "Window"
}// para criar um "novo" valor de this, veja abaixo
const b = {
    a: function () {
        console.log(this); // this vai dar "b"!
    }
}

// instanciação

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome,idade,cpf){
        super(nome,idade) //extends e super são inseparáveis...
        this.cpf=cpf
    }
}