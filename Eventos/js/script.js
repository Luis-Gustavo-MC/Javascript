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