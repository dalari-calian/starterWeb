let nota = 59

if (nota >= 90){
    console.log("A")
} else if (nota >= 80 && nota <=89){
    console.log("B")
} else if (nota >= 70 && nota <=79){
    console.log("C")
} else if (nota >= 60 && nota <=69){
    console.log("D")
} else {
    console.log("F")
}

console.log("-----------------------------------------------------------------")

let gastos = {
    receitas: [1100,1000,3000],
    despesas: [200,100,300,400,600,700,800,900]
}

function saldo(){
    let totalReceita = 0
    let totalDespesa = 0
    let saldo = 0

    for(let receita of gastos.receitas){
        totalReceita += receita
    }
    for(let despesa of gastos.despesas){
        totalDespesa += despesa
    }

    saldo = totalReceita - totalDespesa
    console.log(totalDespesa)
    console.log(totalReceita)
    if (saldo < 0){
        /*alert("Saldo Negativo: "+saldo)*/
    } else{
        /*alert("Saldo Positivo: "+saldo)*/
    }

}
saldo()

console.log("-----------------------------------------------------------------")

let temp = "86F"

function convertTemp(temp){
    if (temp.includes("C")){
        console.log("Celsius")
        temp = temp.toUpperCase()
        let temp1 = temp.replace(/C/gi,"")
        temp = new Number(temp1)
        let tempF = temp * 9/5 + 32
        return tempF
    } else {
        console.log("Fahrenheit")
        temp = temp.toUpperCase()
        let temp1 = temp.replace(/F/gi,"")
        temp = new Number(temp1)
        let tempC =  (temp - 32) * 5/9
        return tempC
    }
}

/*alert("Temperatura Convertida: "+convertTemp(temp))*/

console.log("-----------------------------------------------------------------")

const booksByCategory = [
    {
        category: "Mentalidade",
        books: [
            {
                tittle: "A",
                author: "Augusto Cury",
            },
            {
                tittle: "B",
                author: "Augusto Cury",
            },
            {
                tittle: "C",
                author: "Bill Gates",
            },
        ]
    },
    {
        category: "Lógica",
        books: [
            {
                tittle: "D",
                author: "Augusto Cury",
            },
            {
                tittle: "E",
                author: "Augusto Cury",
            },
            {
                tittle: "F",
                author: "Jessy",
            },
            {
                tittle: "G",
                author: "Bill Gates",
            },
        ]
    },
    {
        category: "Metamática",
        books: [
            {
                tittle: "H",
                author: "Augusto Cury",
            },
            {
                tittle: "I",
                author: "Steve Jobs",
            },
            {
                tittle: "J",
                author: "Bill Gates",
            },
            {
                tittle: "K",
                author: "Leonardo",
            },
            {
                tittle: "L",
                author: "Viola",
            },
        ]
    }
]

function books() {
    console.log("Quantidade de categorias: " + booksByCategory.length)
    for(let categorys of booksByCategory){
        console.log("---------------------------------------------")
        console.log("Categoria: " + categorys.category + " - Total de livros: " + categorys.books.length)
        console.log("Quantidade Autores: "+categorys.books.length)
        for(let authors of categorys.books){
            if(authors.author == "Augusto Cury"){
                console.log("Livro: " + authors.tittle + " Autor: " + authors.author)
            }
        }
    }
}

function authorName(name) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(`Livros do utor ${name}`)
    for(let categorys of booksByCategory){
        for(let authors of categorys.books){
            if(authors.author == name){
                console.log(`- ${authors.tittle}\n`)
            }
        }
    }
}

books()
authorName("Augusto Cury")
