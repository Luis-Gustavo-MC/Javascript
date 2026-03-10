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
