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
