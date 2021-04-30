const minhaFuncao = new Function('arg','return arg')

console.log(minhaFuncao("iiihaaa"))

// o construtor de funções leva o código da função, seu nome e suas propriedades (call, apply por exemplo)
// especificamente, FUNÇÕES SÃO OBJETOS CALLABLE ("chamáveis")