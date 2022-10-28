//var = varia

var clima = "Quente"
clima = "Frio"

console.log(clima)

//let

let clima = "Quente"
clima = "Frio"

console.log(clima)

//const = constante/não muda

const clima = "Quente"
clima = "Frio"

console.log(clima) //irá apresentar erro

//block statement

{
    let x = 0
    console.log(x)
}

//declaração de variável
var name
//atribuição de valores
name = "joão"
//o tipo de dado que foi colocado na variável
console.log(typeof name)

let age, isHuman

age - 18
isHuman = true

console.log(name, age, isHuman)

//escrita de texto + variáveis
console.log('o ' + name + ' tem ' + age + ' anos. ')

//interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)

//object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

//array

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

//como acessar valores dentro do Array
console.log(animals.lenght)//para acessar o tamanho
console.log(animals[0])// para acessar posição
