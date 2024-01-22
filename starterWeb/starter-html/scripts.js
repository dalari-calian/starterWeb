console.log("Passou teste")

let teste = document.getElementById(carbrand)

console.log(teste)

{ Teste : "Calian"}

console.log({
    name: "Calian",
    idade: 18,
    andar: function() {
        console.log("correr")
    }
})
console.log([
    "Calian",18,
    "Leonardo",19
])

let person = {
    name: "Calian",
    age: 18
}

let animals = [
    "Dog",
    "Lion",
    "Bird",
    "Snake",
    "Cat",
]

let cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date('2017-01-03'),
      capacity: 7
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date('2018-03-03'),
      capacity: 5
    }

]

//var - pode reatribuir valor a ela - var têm escopo global ou escopo de função
var clima = "Quente"
clima = "Frio"
console.log(clima)
//let - pode reatribuir valor a ela - apenas escopo de bloco, instrução ou expressão.
//const - é constante não pode reatribuir valor a ela, será sempre o primeiro valor que recebeu
const temperatura = 25
console.log(temperatura)

/*
console.log("existe y antes do bloco? ", x) // undefined

{
    var x = 0
}

console.log("existe y antes do bloco? ", x) // 0
*/
/* O mesmo bloco acima por trás dos panos ele faz assim:
var x

console.log("existe y antes do bloco? ", x) // undefined

{
    x = 0
}

console.log("existe y antes do bloco? ", x) // 0
*/
/*
{
    console.log("existe y antes do bloco ",y) // erro
    {
        let y = 0
        console.log("existe y", y) // 0
    }
    console.log("existe y antes do bloco ",y) // erro
}
*/

//Agrupando variáveis console.log

console.log(clima + " - " + temperatura)
console.log(clima, temperatura)
console.log(person.name + " - " + person.age)
console.log(person.name + " tem " + person.age + " anos de idade")
console.log(`${person.name} tem ${person.age} anos de idade`)
console.log(animals[0])
console.log(animals)
console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[0].color)

// ------------------------------------------ EXERCÍCIO

// 1 - Declarar uma variável de nome weight

var weight

// 2- Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 3 - Declarar uma variável e atribuir valores para cada um dos dados:
    name: String
    age: Number integer
    stars: Number float
    isSubscribed: Boolean
*/
//var name = "Calian"
//var age = 18
//var stars = 19.5
//var isSubcribed = true

// 4 - Qual tipo da variável student abaixo?

//let student = {}
//console.log(typeof student) // object

// 4.1 -  Atribuir a ela os mesmos valores do execício 3
let student = {
    name : "Calian",
    age : 18,
    stars : 19.5,
    isSubcribed : true,
    weight: 59.8
}

console.log(student.name + " - " + student.age + " - " + student.weight)

// 5 - Declarar uma variável do tipo Array, de nome students e atribua a ela nenhum valor, Array vazio

let students = []
console.log(students)

// 6 - Reatribuir valor para a variável acima, colocando dentro dela o objeto students da questão 4

students = [
    student
]

// 7 -  Colocar no console o valor da posição zero do Array acima
console.log(students[0])

// 8 -  Criar um novo student e coloque na posição 1 do Array students

let student1 = {
    name: "Leonardo",
    age: 19,
    weight: 65
}
/*
students = [
    student,
    student1
]
*/
/*
students[1] = [
    student1
]
*/

let testex = [
   "Calian" 
]
testex[1] = "Viola"
console.log(testex)


students[1] = student1

console.log("---------------------")
console.log(students)