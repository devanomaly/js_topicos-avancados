// herança prototípica => acesso às propriedades e metodos de outro cara
// Arrays e Functions HERDAM de objetos
// class => syntactic sugar: NÃO EXISTE CLASSE EM JS, apenas herança prototípica!
let dragao = {
    name: "Tiranyus",
    fogo: true,
    dormir() {
        return "A mimir"
    },
    cantar() {
        return `Eu sou ${this.name}, o cuspidor de fogo`
    }
}

let lagarto = {
    name: 'Lelis',
    // cantar() {
    //     return `Eu sou ${this.name}, o lagarto veloz`
    // }
}

// o lagarto não dorme? Bem, podemos mudar isso com o bind (ver arquivo call_apply_bind.js)
const lagartoDorme = dragao.dormir.bind(lagarto)
console.log(lagartoDorme());
// lagarto.__proto__ = dragao // deprecated...
lagarto = Object.create(dragao, { name: { value: lagarto.name } }) // notação moderna (primeiro o objeto prototipado, depois nomes dos campos e valores [opcional])
// se nao tivessemos passado value: lagarto.name, pegaria o nome do dragao...
console.log(lagarto.cantar())
// Notação muito exagerada. Usar class é bem mais simples!