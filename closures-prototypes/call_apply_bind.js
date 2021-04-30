//call() => simplesmente chama a função! f() === f.call() =D
//apply() também faz isso
// MAS, call e apply também nos permitem "roubar" métodos de um objeto e usar noutro!
// "bind", ao contrário de call e apply - que executam os métodos de imediato - retorna o método, com um determinado contexto (this), e nos permite reutilizar etc =D


// Bind e Currying
// currying
function multiply(a,b) {
    return a*b
}
let multiplyByTwo = multiply.bind(null,2) // geramos um novo método a partir de um metodo base!
console.log(multiplyByTwo(3));