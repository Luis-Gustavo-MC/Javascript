// 1 - Strict
"use strict"

const opa = "teste"
//const undefined = 10
//delete [].length

// 2 -  console.log

let a = 1
let b = 2

if(a == 1){
    a = b + 2
}
console.log(a)

for(let i = 0; i<b; i++){
    a = a + 2
    console.log(a)
}
if(a > 5){
    a = 25
}
console.log(a)

// 3 - debugger
let c = 1
let d = 2

if(c == 1){
    c = d + 2 
}

//debugger

for(let i = 0; i<d; i++){
    c = d + 2
}

console.log("Teste")

//debugger

// 4 - tratamento de dados
function checkNumber(n){
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor Incorreto!")
        return
    }
    console.log("Valor correto!")
    return result;
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("Teste")

// 5 - Exceptions
// 5.1 Throw
let x = 10

if(x!=11){
    throw new Error("O valor de x não pode ser 11!")
}

// 5.2 try catch
try{
    const soma = x + y
}catch(error){
    console.log("Erro no programa: " + error)
}


// 5.3 Finally
try{
    const value = checkNumber()
    if(!value){
        throw new Error("Valores invalidos")
    }
}catch(error){
    console.log("ERRO" + error)
}finally{
    console.log("Rodou")
}

// 6 - Assertion
function checkArray(arr){
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos")
    }else{
        console.log("O array tem elementos" + arr.length)
    }
}
