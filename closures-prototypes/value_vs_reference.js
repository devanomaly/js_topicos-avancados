// valores primitivos => passagem por valor
// objetos => passagem por referência
var a = 1
var b = a // os valores primitivos sempre são COPIADOS e alocados em um novo lugar na memória!
a++
console.log(b)

// objetos, por outro lado, compartilham um "endereço"!!!
var objeto1 = {a:1, b:2}
var obj2 = objeto1
objeto1.b = 4
console.log(obj2) 
// e se eu quiser modificar apenas o objeto 1?
var obj3 = Object.assign({}, objeto1) // esse cara CLONA o objeto1 (; - por isso temos um endereço de memória compvaramente novo!)
objeto1.a = 5
console.log(obj3) 
console.log(objeto1) 
// Muito cuidado com isso, porque sua memory heap pode lotar...
// outra forma de clonar é usando o spread
var obj4 = {...objeto1}
console.log(objeto1) 
console.log(obj4) 
objeto1.a = 1000
console.log(objeto1) 
console.log(obj4) 

// NOTE ENTRETANTO, que os clones acima são "supérfluos"... clona apenas no primeiro nivel de referencia
// para fazer uma clonagem profunda, temos
var superClone = JSON.parse(JSON.stringify(objeto1))
// novamente, cuidado com a memory heap...


const number = 100
const string = "Jay"
var objeto1 = {
  value: "a"
}
var obj2 = {
  value: "b"
}
var obj3 = obj2;
 
function change(number, string, objeto1, obj2) {
    number = number * 10;
    string = "Pete";
    objeto1 = obj2;
    obj2.value = "c"; //!! => acessa por referência, então o escopo local da função é "ultrajado!"
}
 
change(number, string, objeto1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); 
console.log(string);
console.log(objeto1.value);
console.log(obj2.value);