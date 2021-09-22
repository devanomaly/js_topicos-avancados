// Voce foi contratado pela Amazon. Sua tarefa é implementar uma feature que
// 1. adicione itens ao carrinho
// 2. adicione 3% de taxas no item que foi adicionado ao carrinho
// 3. quando o item for comprado: carrinho --> compras
// 4. esvaziar carrinho

// Um usuario típico tem a seguinte estrutura
const user = {
    nome: "Josefina",
    ativo: true,
    carrinho: [],
    compras: []
}
// Um item típico tem a seguinte estrutura
const item1 = {
    preco: 1.00,
    descricao: "produto legal 1"
    // ...etc
}
const item2 = {
    preco: 3.00,
    descricao: "produto legal 2"
    // ...etc
}
// BONUS:
//  aceitar devoluções
//  acompanhar histórico do usuário

// SOLUÇÃO FIXME: um monte de coisa errada... entender melhor o fluxo dos dados, cópia, passagens dos valores!
const adicionarItens = (user, ...items) => {
    user.carrinho = user.carrinho.filter(i => !(i in items)).filter(j => !!j)//adicionando ao carrinho
    if (user.carrinho[0]){
        user.carrinho.push(...items.map(j => j * 1.03))
        return user.carrinho
    } else {return "Item já estava no carrinho"}
}
const comprarItens = (user, ...items) => {
    console.log(items)
    user.carrinho = user.carrinho.filter(i => !(i in items)) // removendo item do carrinho
    user.compras.push(...items) //inserindo item nas compras
}
// problemas restantes: para comprar varios itens, chamar a mesma função várias vezes ou criar uma função que recebe um número arbitrário de itens?
adicionarItens(user, item1, item2)
console.log(user)
comprarItens(user, item1, item2)
console.log(user)