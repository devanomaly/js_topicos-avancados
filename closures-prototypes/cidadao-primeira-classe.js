// Por que sao primeira classe?
// 1) voce pode guardar funções em variaveis
let minhaFuncao = function (){return "olar"}
// 2) voce pode usar funções como argumentos de outras funções
let b = (arg) => {console.log(arg())}
b(minhaFuncao)
// 3) voce pode retornar funções a partir de outras funções
function c(funcao) {
    return funcao
}

c(b)(minhaFuncao)

// funcoes do tipo 2 ou 3 são chamadas "funções de alta ordem" (HOF => Higher Order Function)