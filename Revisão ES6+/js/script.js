// 1- Variaveis var, let e const
// 1.1 - Problemas com var
var a = 10
var b = 15

if(b>10){
    var a = 5
    console.log(a)
}
console.log(a)

// 1.2 let
let x = 10
let y = 15

if(y>10){
    let x = 5
    console.log(x)
}
console.log(x)

// 1.3 const
function logName(){
    const name = "Pedro"
    console.log(name)
}
logName()
const name = "Luis"
console.log(name)

// 2 - Arrow functions
// 2.1 - function normal
const soma = function(a,b){
    return a+b
}

// 2.2 Arrow function
const arrowSoma = (a,b) => a+b

// 2.3 Resultados
console.log(soma(5,5))
console.log(arrowSoma(5,5))

// 2.4 Outro exemplo
const greeting = (nome)=>{
    if(nome){
        return `Hello ${nome}`
    }else{
        return "Hello"
    }
}
console.log(greeting() + " " + greeting("Luis"))

const user = {
    name: "Luis",
    sayUserName(){
        setTimeout(function (){
            console.log(this)
            console.log(`Username: ${this.name}`)
        },1000)
    },
    sayUserNameArrow(){
        setTimeout(() =>{
            console.log(this)
            console.log(`Username: ${this.name}`)
        },2000)
    }
}

user.sayUserName()
user.sayUserNameArrow()