// 1 - Variaveis
let nome = 'Luis'
console.log(nome)

nome = 'Gustavo'
console.log(nome)

const idade = 23
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

let a = 5, b = 4, c = 10
console.log(a+b+c)

// 2 - Prompt
// nome = prompt("Escreva seu nome: ")
console.log(nome)

//3 - Alert
// alert("Teste")

// 4 - Math
console.log(Math.max(1,2,3))
console.log(Math.floor(1.2))
console.log(Math.ceil(5.15))

// 5 - Console
console.log("A")
console.error("Erro!")
console.warn("Aviso!")

//  6 - IF and Else
const x = 10
if(x>5){
    console.log("S")
}else{
    console.log("N")
}

const user = 'João'
if(user === 'João'){
    console.log("S")
}else{
    console.log("N")
}

// 7 - Else IF
const n = 'a' // 10
if(n<10){
    console.log("A")
}else if(n>10){
    console.log("B")
}else{
    console.log("C")
}

// 8 - While
let num = 0
while(num<10){
    console.log(num)
    num++
}
// 9 - Do While
num = 0
do{
    console.log(num)
    num++
}while(num<10)

// 10 - For
for(let num = 10; num<=20; num++){
    console.log(num)
}

// 11 - Break
for(let num = 10; num<=20; num++){
    console.log(num)
    if(num === 12){
        break
    }
}
// 12 - Continue
for(let num = 10; num<=20; num++){
    console.log(num)
    if(num === 12){
        continue
    }
}