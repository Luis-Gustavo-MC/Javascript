// 1 - Funções
function helloWord(){
    console.log("Hello Word!")
}
helloWord()

// 2 - Retornando Valores
function somar(a,b){
    return a + b
}
let a = 2 , b = 3
console.log(somar(a,b))

// 3 - Escopo da Função
let u = 10

function test(){
    let u = 20
    console.log("Variavel dentro da função "+u)
}

test()
console.log("Variavel fora da função " + u)

// 4 - Escopo aninhado
let m = 10
function escopoAninhado(){
    let m = 20
    console.log(m)
    if(true){
        let m = 30
        console.log(m)
    }if(true){
        let m = 40
        console.log(m)
    }
}
console.log(m)
escopoAninhado()

// 5 - Array function
const testArrow = () =>{
    console.log("Essa é uma arrow function")
}
testArrow()
const parOuImpar = (n) =>{
    if(n%2==0){
        console.log("PAR!")
        return
    }else if(n%2!=0){
        console.log("Impar!")
        return
    }else{
        console.error("ERRO!")
    }
}
parOuImpar(11)

const raizQuadrada = (x) => x*x
console.log(raizQuadrada(10))

// 7 - Parametro Opcional
const multiplicacao = function(m,n){
    if(n===undefined){
        return m*2
    }else{
        return m*n
    }
}
console.log(multiplicacao(2))
console.log(multiplicacao(2,4))

// 8 - Default
const greeting = (nome, greet = 'ola') => {
    console.log(greet + ", " + nome)
}
greeting('luis')

// 9 - Closure
function someFunction(){
    let txt = "abc"

    function display(){
        console.log(txt)
    }
    display()
}

someFunction()

const multiplicationClosure = (n) => {
    return(m) =>{
        return n*m
    }
}
let c1 = multiplicationClosure(10) , c2 = multiplicationClosure(2)
console.log(c1 + "\n" +  c2)
console.log(c1(2) + "\n" +  c2(5))

// 10 - Recursão
const untilTen = (n,m) =>{
    if(n<10){
        console.log("A função parou de executar")
    }else{
        const x = n-m
        console.log(x)
        untilTen(x,m)
    }
}
untilTen(100 , 7)
