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