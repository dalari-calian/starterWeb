function criarFrase() {
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é mãe do aprendizado")
}

criarFrase()

console.log("----------------\nFim do programa\n----------------")

// function expression or function anonymous

const sum = function(num1,num2) {
    let result = num1 + num2
    console.log(result)
    console.log("OR \n" + (num1 + num2))
}

sum(1,3)

function somar(n1,n2){
    let result = n1 + n2
    console.log(result)
    console.log(n1 + n2)
}

somar(1,2)

function multiple(n1,n2){
    //let result = n1 * n2
    //return result
    return n1 * n2
}

console.log("Valor da multiplicação: "+multiple(2,2))


const sayMyName = function () {
    console.log("Calian")
}

// Mesma forma que acima

const sayMyName2 = () => {
    console.log("Calian2")
}

sayMyName()
sayMyName2()

// Callback funciton

function sayMyName3(name) {
    console.log("Antes de executar uma callback")
    
    //console.log(name)
    name()

    console.log("Depois de executar uma callback")
}

sayMyName3(
    () => {
        console.log("Estou em uma callback")
    }
)

// Exemplo de como acontece mais ou menos
/*
function sayMyName3(name) {
    console.log("Antes de executar uma callback")
    
    //console.log(name)
    () => {
        console.log("Estou em uma callback")
    }

    console.log("Depois de executar uma callback")
}

sayMyName3(
    () => {
        console.log("Estou em uma callback")
    }

----

function sayMyName3() {
    console.log("Antes de executar uma callback")
    
    //console.log(name)
    function name(){
        console.log("Estou em uma callback")
    }

    console.log("Depois de executar uma callback")
}

sayMyName3(
)*/

// Função construtora

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
//uma forma de criar objeto
const calian = new Person("Calian")
//outra forma de fazer
const carro = {
    nome: "Calian"
}
console.log(calian.name)

const renaldo = new Person("Renaldo")
console.log(calian.walk)

let name1 = new String("Calian")
console.log(name1)

let string = "10"
console.log(Number(string))
console.log(string)
let number = 321
console.log(String(number))
console.log(number)

let word = "Calian"
console.log(word.length)

let number2 = 123.32433
console.log(number2.toFixed(1).replace(".",","))

let upper =  "CALIAN"
console.log(upper.toLowerCase())
let lower = "Calian"
console.log(lower.toUpperCase())

let frase = "Hoje está um dia muito lindo! Os passaros estão cantando."
let myArray =  frase.split(" ")
let fraseUnderscore = myArray.join("_")
console.log(fraseUnderscore)

let frase1 = "Andar de bike é legal!"
console.log(frase1.includes("Andar"))
console.log(frase1.includes("bicicleta"))

// Criar Array com construtor

let myArray1 = new Array(10)
console.log(myArray1)


let myArray2 = new Array("Calian", "Renaldo", "Jessy", "Leonardo")
console.log(myArray2)

// Contar elementos de um Array

console.log(["a", "b", "c"].length)
console.log(["a", "b", "c"][1])

console.log([
    "Calian",
    {type: "array"},
    function() { return "Dentro da função" }
][2]())
// Há diferença entre a execução do código aicma e o de baixo
console.log([
    "Calian",
    {type: "array"},
    function() { return "Dentro da função" }
][2])

// Transmormar uma cadeia de caracteres em elementos de um array
let word1 = "teste"
console.log(Array.from(word1))

let teste3 = {
    name: "Calian",
    age: "18",
    from: "Jaraguá do Sul"
}

// Adicionar um item no fim do array

let code = ["html", "css", "js"]
console.log(code)

code.push("Java")
console.log(code)

// Adicionar um item no começo do array
code.unshift("node")
console.log(code)

// Remover um item no fim do array
code.pop()
console.log(code)

// Remover um item do começo do array
code.shift()
console.log(code)

// Pegar somente alguns elementos do array
console.log(code.slice(0,3))

// Remover um ou mais items em qualquer posição do array
console.log(code.splice())

//Encontrar a posição de um elemento no array
let index = code.indexOf("css")
console.log(index)

//Encontrar e remover a posição de um array
index = code.indexOf("css")
code.splice(index)
console.log(code)

// - Operadores Lógicos
// AND &&
// OR ||
// NOT ! - NEGA ALGUMA COISA / TROCA DE VALOR

//Condição verdadeira entre valor

let pao = true
let presunto = false
let queijo = false

const niceBreakfast = pao && (presunto || queijo) ? "Cafe top" : "Café não é top"

console.log(niceBreakfast)

// If and else

let temperatura = 38

if(temperatura >= 37){
    console.log("Está com frebe")
} else{
    console.log("Normal")
}

let temperaturaAlta = temperatura >= 37.5 
console.log("--- "+ temperaturaAlta)

if (temperaturaAlta){
    console.log("Temperatura Alta")
}

if(temperatura >= 37.5){
    console.log("Febre alta")
} else if(temperatura < 37.5 && temperatura >= 37){
    console.log("Febre moderada")
} else{
    console.log("Temperatura Normal")
}

// Switch
let expression = 'c'

switch (expression) {
    case 'a':
        console.log("a")
        break
    case 'b':
        console.log("b")
        break
    default:
        console.log("!!")
        break
}


// Try Catch

function testeTry(name = ''){
        if (name === '') {
            throw 'Nome é obrigatório!'
        }
        console.log('Depois do erro')
}

try{
    testeTry()
} catch(e) {
    console.log(e)
}

// For

for(let i = 10; i > 0; i--){
    console.log(i)
    if(i == 5){
        break;
    }
}

// While

let a = 1

while (a <= 10){
    console.log("a: "+a)
    a++
}

// For of

let nome1 = "Calian"
let nomes = ["Leonardo", "Viola", "Jessy"]

for(let char of nome1){
    console.log(char)
    if(char == "l"){
        break
    }
}

for(let name of nomes){
    console.log(name)
}

let person ={
    name: "Calian",
    age: 18,
    job: "Software"
}

// For in

for (let property in person){
    console.log(property + ": " + person[property])
}