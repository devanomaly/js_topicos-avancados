function a() {
    let vovo = "vovo"
    return function b() {
        let papai = "papai"
        return function c() {
            let filhote = "filhote"
            return `${vovo} > ${papai} > ${filhote}`
        }
    }
}
console.log(a()()())
// a garbage-collection não joga fora coisas da caixa "closure"! por isso o ambiente de variáveis tem acesso => ele olha dentro de closure. é isso que permite filhote, papai e vovo estarem bem definidos na ultima chamada
// Dito de outra forma, closures garantem um escopo léxico comum

const foo = string => nome => outroNome => `Tá tudo aqui!\n${string} ${nome} ${outroNome}`;

const guarda1 = foo("eita")
// "2 horas depois" narrador do Bob Esponja
const quase = guarda1('Pleura')
const mostrando = quase('da Silva!')
console.log(mostrando)

// Closures são eficientes no uso de memória
function trabalhoPesado(indice) {
    const arrayGigante = new Array(8000).fill(':D')
    return arrayGigante[indice]
}

console.log(trabalhoPesado(80)) // e se precisarmos chamar essa função muitas vezes?
// Note que o arrayGigante está sendo criado e destruído toda vez que chamamos...
// Com closures podemos fazer
const comClosures = function () {
    let bigArray = new Array(8000).fill(':D')
    bigArray[3] = "Opa!"
    return (index) => bigArray[index]
}
const meuArrayGuardadim = comClosures()
console.log(meuArrayGuardadim(20));
console.log(meuArrayGuardadim(3));
// usamos a ideia de HOFs para guardar a função que foi criada uma única vez; E pronto!


// CLOSURES E ENCAPSULAMENTO
const criarBomba = () => {
    let tempoSemDestruicao = 0
    const passarOTempo = () => tempoSemDestruicao++
    const tempoEmPaz = () => tempoSemDestruicao
    const detonar = () => {
        tempoSemDestruicao = -1
        return 'boom!'
    }
    setInterval(passarOTempo, 1000)
    return {
        // detonar, //devido ao que falamos na linha 60, é preciso que "detonar" nao seja retornada!
        tempoEmPaz,
    }
}

const Naaao = criarBomba()
console.log(Naaao.detonar()); // nao queremos que qualquer um detone...