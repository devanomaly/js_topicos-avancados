// PROBLEMA: como proibir a inicialização dessa função? 
// Isto é, uma vez que tenha sido chamada, caso alguem a chame novamente => Error ou algo do tipo
let view
function inicializar() {
    view = "paisagem"
    console.log("A view foi setada");
}

inicializar()
inicializar()
inicializar() //Tres vezes já! Faça isso parar!
console.log(view);

const inicializar2 = () => {
    let tempoSemDestruicao = 0
    setView = () => view = "paisagem"
    if (view !== "paisagem") {
        setView()
    }
    return {
        view
    }
}
console.log(inicializar2());

// Uma questão de entrevista
const array = [1, 2, 3, 4]
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log("Pergunta " + i);
    }, 3000) // por que sempre é logado "Estou no índice 4" ?
}
// Pergunta-se: como fazer para mostrar os índices em ordem correta?

// Após alguns experimentos, vemos 2 coisas: 1) o índice 4 sempre aparece, independentemente do tempo usado em setTimeout; 2) na verdade não tem nada de especial com o índice 4. É sempre o índice ÚLTIMO+1 que aparece.
// const array = new Array(100000).fill("=d") <= mesmo com um array gigante, acontece a mesma coisa!
// solução 1 => troque var por let... isso evita o problema de escopo + hoisting
const array2 = [1, 2, 3, 4]
for (let i = 0; i < array2.length; i++) {
    setTimeout(function () {
        console.log("Sol1 " + i);
    }, 3000) 
}
// solução 2 => remova log do setTimeout LOL
const array3 = [1, 2, 3, 4]
for (var i = 0; i < array3.length; i++) {
    setTimeout(() => {
    }, 3000) 
    console.log("Sol2 " + i);
}
// solução 3 => closures!
const array4 = [1, 2, 3, 4]
for (var i = 0; i < array4.length; i++) {
    (function (meuIndice) {setTimeout(() => {
        console.log("Sol3 " + meuIndice);
    }, 3000) 
    })(i) //obrigamos o loop a chamar a função e aguardar sua finalização...
}