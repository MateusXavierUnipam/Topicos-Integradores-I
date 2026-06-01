// Exemplo 1
// Usando var (escopo global/função)

var nome = "Mateus";
console.log(nome)

if(true) {
    var nome = "Maria";
    console.log(nome);
}

console.log(nome);

// Exemplo 2
// Usando let

let idade = 34;
console.log(idade)

if(true) {
    let idade = 35;
    console.log(idade);
}
// idade = 35.5
console.log(idade);

// Exemplo 3
// Usando const

const pi = 3.14;
console.log(pi);

if (true) {
    const pi = 3.14159
    console.log(pi);
}

//pi = ;
console.log(pi);

// Function
function saudacao(nome) {
    return "Olá, " + nome + "!"
}

console.log(saudacao("Rafael"));

const soma = function (a, b) {
    return a + b;
}

console.log(soma(10, 22));

// Arrow function

const multiplicacao = (x, y) => x * y;
console.log(multiplicacao(5,6));

const pessoa = {
    nome: "Mateus",
    idade: 21,
    email: "mateusxavier0707@gmail.com",
    curso: "Sistemas de Informação",
    saudar: function (){
        return `Oi, meu nome é ${this.nome} e meu curso é ${this.curso}`
    },
    saudarArrow: () => `Oi, meu nome é ${this.nome} e meu curso é ${this.curso}`
}

console.log(pessoa);
console.log(pessoa.saudarArrow());

class Animal{
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo
    }

    exibirInformacoes() {
        return `Este é um ${this.tipo} chamado ${this.nome}`
    }
}

const cachorro = new Animal("Yog-Sothoth", "cachorro")
const gato = new Animal("Nyarlathotep", "gato")

console.log(cachorro.exibirInformacoes);
console.log(gato.exibirInformacoes);



function exibirInfoProduto(produto) {
    return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidade(s).`
}


