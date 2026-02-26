// 1 - Dom
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].textContent)

// 2 GetElements
// 2.1 - Selecionando elementos por tag
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 2.2 - Selecinando elementos por id
const title = document.getElementById("title")
console.log(title)

// 2.3 - Selecionando elementos por classe
const products = document.getElementsByClassName("product")
console.log(products)

// 2.4 - Selecionando elementos por CSS
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)