// 1 - setTimeout
console.log("Ainda não executou")

setTimeout(function(){
    console.log("Requisição assincrona")
}, 2000)
console.log("Ainda não executo 2")

// 2 - setInterval
setInterval(function(){
    console.log("Teste")
}, 2000)