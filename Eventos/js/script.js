// 1- Eventos
// 1.1 Adicionando Eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("teste")
})

// 1.2 Removendo eventos
const btn2 = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Teste")
}
btn2.addEventListener("click",imprimirMensagem)

const btn3 = document.querySelector("#other-btn")

btn3.addEventListener("click", () =>{
    console.log("Evento removido")
    btn2.removeEventListener("click" , imprimirMensagem)
})

// 1.3 Argumentos do eventos
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (e) =>{
    console.log(e)
    console.log(e.offsetX)
    console.log(e.pointerType)
    console.log(e.target)
})

// 1.4 Propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsiderContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", ()=>{
    console.log("Evento1")
})

btnInsiderContainer.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log("Evento2")
})

// 1.5 Removendo evento padrao
const a = document.querySelector("a")
a.addEventListener("click" , (e) =>{
    e.preventDefault()
    console.log("aaaa")
})

// 1.6 Evento de tecla
document.addEventListener("keyup", (e)=>{
    console.log(`tecla: ${e.key}`)
})
document.addEventListener("keydown", (e)=>{
    console.log(`tecla: ${e.key}`)
})