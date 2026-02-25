// 1 - setTimeout
/*
console.log("Ainda não executou")

setTimeout(function(){
    console.log("Requisição assincrona")
}, 2000)
console.log("Ainda não executo 2")
*/

// 2 - setInterval
/*
setInterval(function(){
    console.log("Teste")
}, 2000)*/

// // 3 - Promise
const promessa = Promise.resolve(5 + 5)
console.log("AAA")

promessa
    .then((value) => {console.log(`A soma é ${value}`); return value })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`))
console.log("AbA")

// // 4 - correção de erros
Promise.resolve(4 * "asd")
    .then((n) => {
        if(Number.isNaN(n)){
            throw new Error("Valores invalidos")
        }
    })
    .catch((err)=> console.log(`Um erro ocorreu ${err}`))

// 5 - Rejeição
function checkNumber(n){
    return new Promise((resolve,reject)=>{
        if(n>10){
            resolve(`O numero é maior* que 10`)
        }else{
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(1)
const b = checkNumber(20)
a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log("Um erro ocorreu: " + err))
b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log("Um erro ocorreu: " + err))

// 6 - resolvendo varias promessas
const p1= new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve(10)
    },1000)
})

const p2 = Promise.resolve(10+10)

const p3 = new Promise((resolve,reject) =>{
    if(30>10){
        resolve(30)
    }else{
        reject("Erro")
    }
})

Promise.all([p1,p2,p3]).then(values => console.log(values))

// 7 - async functions
async function somarComDelay(a,b) {
    return a+b
}
somarComDelay(2,4).then((value) =>{
    console.log("O valor da soma é: " + value)
})
console.log("teste async")

// 8 - await
