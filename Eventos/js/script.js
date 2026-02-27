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

// 1.7.1 Eventos de mouse
const mouse = document.querySelector("#mouse")
mouse.addEventListener("mousedown" , () => {
    console.log("Presssionou")
})
mouse.addEventListener("mouseup" , () => {
    console.log("Soltou")
})
mouse.addEventListener("dblclick" , () => {
    console.log("duplo")
})

// 1.7.2 Mouse move
document.addEventListener("mousemove" , (e)=>{
    //console.log(`No eixo x${e.x}`)
    //console.log(`No eixo y${e.y}`)
})

// 1.8 Eventos de scroll
window.addEventListener("scroll" , (e)=>{
    if(window.pageYOffset>200){
        console.log(">200")
    }
})

// 1.9 Evento de focus/blur
const input = document.querySelector("#my-input")

input.addEventListener("focus" , (e) =>{
    console.log("Entrou no input")
})
input.addEventListener("blur" , (e) =>{
    console.log("Saiu no input")
})

// 1.10 Evento de carregamento de pagina
window.addEventListener("load" , ()=>{
    console.log("A pagina carregou!")
})

window.addEventListener("beforeunload" , (e)=>{
    e.preventDefault()
    e.returnValue(" ")
})

// 1.11 debounce
const debounce = (f, delay) =>{
    let timeout

    return(...Arguments) =>{
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() =>{
            f.apply(Arguments)
        },delay)
    }
}

window.addEventListener("mousemove", 
    debounce(() =>{
        console.log("Executando a cada 400ms")
    },400)
)