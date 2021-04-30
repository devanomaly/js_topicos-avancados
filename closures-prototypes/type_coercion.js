// 1 == "1" // isso dá true... A engine do JS tenta comparar até O TALO. Podemos dizer que a engine vai até as últimas consequências (buscar os valores binários fundamentais!) para concluir se as coisas sendo comparadas são "iguais"
// 1 === "1" // nesse caso estamos pedindo para a engine evitar type-coercion! por isso retorna false =) Que é o que desejamos
// Object.is(+0, -0) // isso dá false LOL
// NaN === NaN // false
// Object.is(NaN, NaN) // isso dá true
A = [false == "",
false == [],
false == {},
"" == 0,
"" == [],
"" == {},
0 == [],
0 == {},
0 == null]

for (a of A){
    console.log(a)
}