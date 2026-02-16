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

// 8 - default
const greeting = (nome, greet = 'ola') => {
    console.log(greet + ", " + nome)
}
greeting('luis')