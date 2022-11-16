console.log("Bem vindos ao Starter!!")

//Para realizar comentários em linha, basta usar "//"

/* Para realizar um comentário em mais de uma linha, basta utilizar "/*"
Assim, conseguimos fazer um comentário mais extenso*/

//Tipo de dados: \/

/*
    Tipos primitivos:

        Diferente dos objeto, que possuem referência, ao alterar um dado primitivo você gera um novo valor, por isso são imutáveis.

        Os mais comuns: Boolean, undefined, Number e String.

        => Boolean:
            Dados do tipo Boolean representam uma entidade lógica e podem ser true (verdadeiro) ou false (falso).
            Exemplo:
            let weekend = false

        => undefined:
            O valor undefined é atribuído automaticamente para uma variável que não tem a atribuição no programa.
            Exemplo:
            let appointment
                (como nenhum valor foi atribuído, appointment recebe undefined)

        => Number:
            O Number é um dado do tipo número. Ele pode ser inteiro ou real (float):
            Exemplo:
            let age = 12
                (age é um número inteiro)

            NaN - Not a Number - usado para representar um dado que não é número.
            Exemplo:
            let notANumber = (25 * "casa")
                (notANumber = NaN, pois é impossível multiplicar um número por uma string alfanumérica)

            Infinity é um valor simbólico que representa o infinito. Precisa ser declarado com o 'I' maiúsculo.
            Exemplo:
            let numberInfinity = (42 / 0)
                (numberInfinity = Infinity)

        => String
            A String é uma cadeia de caracteres, ou seja, um texto.
            Para atribuir uma string a uma variável, você pode usar:
                ' ' = aspas simples
                " " = aspas duplas
                ` ` = template literals, para incluir outras variáveis e expressões dentro da própria string
            Você pode declarar da seguinte forma:
                let name = "João Scloneski"
                let name = 'João Scloneski'
                let name = `João ${ 1 + 1 }` <= aqui o resultado é João 2


    Tipos estruturais:

        Dados do tipo estrutural são diferentes dos tipos primitivos, pois apresentam uma "estrutura" com atributos e métodos.

        São estes os mais comuns: Object e Array.

        => Object
            Dados do tipo Object são objetos e possuem atributos (propriedades) e métodos (funcionalidades).
            Object é declarado da seguinte forma:

            Aqui criamos um Object copo~
            const copo = {
                material: "vidro", <= atributo String
                capacidade: 250, <= atributo Number
                cheio = function () {
                    Aqui podemos declarar uma função/método que será atribuído ao Object
                }
            }

        => Array
            Um dado do tipo Array representa um agrupamento de dados em forma de lista.
            Um Array pode ser declarado da seguinte forma:

            Aqui criamos um Array shoppingList~
            const shoppingList = [
                "leite",
                "ovos",
                "chocolate",
                2,
                3,
            ]

    Tipo primitivo estrutural:

    Dados do tipo null são primitivos estruturais, pois tem um valor (vazio) que são imutáveis e, também, podem representar uma estrutura vazia.

    Exemplo:

    let appointment = null

*/

//Variáveis são nomes simbólicos para receber algum valor
/*
        Atalhos de código
        Identificadores
        3 palavras reservadas para criar uma variável
        * var
        * let
        * const


        Variáveis não precisam ter um tipo previamente definido
        Podemos mudar o conteúdo da variável


        Scope
        Escoppo determina a visibilidade de alguma variável no JS

        Block statement
        Iniciando um bloco:
        {
            ~aqui dentro é um bloco e é possível colocar qualquer código~
        }

        O var é global e poderá funcionar fora de um escopo de bloco
        const e let são locais e só funcionam no escopo onde foram criados
*/

//lista de exercícios em ./anotacoes.js

//FUNÇÕES

/*
        Functions

        Repete códigos e declara (declaration)

        function createPhrases() {
            console.log("joaoscloneski")
            console.log("joaoneski")
            console.log("joaosclonei")
        }

        executar a função

        rodar, chamar, invocar (execute, run, call, invoke)

        createPhrases()
        createPhrases()
        createPhrases()

        console.log('fim do programa')

        function expression
        function anonymous

        parâmetros (parameters)
        declarar função dentro de variável:

        const sum = function(number1, number2){
            let total = number1 + number2
            return total
        }

        let number1 = 34
        let number2 = 24
        sum(number1, number2)


        function hoisting

        sayMyName()

        function sayMyName() {
            console.log('Scloneski')
        }


        arrow function

        const sayMyName = () => {
            console.log('Scloneski')
        }

        sayMyName()


        function() constructor

        * expressão new
        * criar um novo objeto
        * this keyword

        function Person(name) {
            this.name = name
            this.walk = function() {
                return this.name + "está andando"
            }
        }

        const fulano = new Person ("Fulano")
        const cicrano = new Person ("Cicrano")
        console.log(fulano.walk())
        console.log(cicrano.walk())


        Js é uma linguagem baseada em PROTÓTIPOS

        *cadeia de protótipos
        *__proto__


        Type conversion (typecasting) vs Type coersion

        *alteração de um tipo de dado para outro tipo


        Manipulando strings e números

        tranformar string em número e número em string

        let string = '123'
        console.log(Number(string))
        let number = 321
        console.log(String(number))


       *** Manipulando Strings e Números

        Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

        let word = "Paralelepípedo"
        console,log(word.lenght)
        let number = 1234
        console.log(String(number).length) // não funciona sem antes tranformar number em uma String

        Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
        let number = 325.342342
        console.log(number.toFixed(2).replace(".", ","))

        Transformar letras minúsculas em maiúsculas. E depois ao contrário.

        let word = "Programar é muito bom!"
        console.log(word.toUpperCase())
        ou
        console.log(word.toLowerCase())


        Manipulando Strings e Arrays

        Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque _

        let phrase = "Eu quero viver o Amor!"
        let myArray = phrase.split(" ")
        let phraseWithUnderscore = myArray.join("_")
        console.log(phraseWithUnderscore.toLowerCase())


        Manipulando Strings

        Verificar se o texto contém a palavra Amor

        let phrase = "Eu quero viver o Amor!"
        console.log(phrase.includes("Amor"))

        Manipulando Arrays

        Criar Array com construtor

        let myArray = new Array('a', 'b', 'c')
        console,log(myArray)


        contar elementos de um Array

        console.log(["a", "b", "c"].length)


        Tranformar uma cadeia de caracteres em elementos de um array

        let word = "manipulação"
        console.log(Array.from(word))


        Manipulando Arrays

        let techs = ["html, "css", "js"]

        adicionar um item no fim

        techs.push("nodejs")

        adicionar um no começo

        techs.unshift("sql")

        remover do fim

        techs.pop()

        Remover do começo

        techs.shift()

        pegar somente alguns elementos do Array

        console.log(techs.slice(1,3))

        remover 1 ou mais itens em qualquer posição no array

        techs.splice(1, 2)

        encontrar a posição de um elemento no array

        let index = techs.indexOf('css')
        techs.splice(index, 1)

        //console.log(techs)
*/