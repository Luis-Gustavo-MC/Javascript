// 1 - Dom
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].textContent)

// 2 - GetElements
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

// 3 - Mudando HTML
// 3.1 - insertBefore
const p = document.createElement("p")
const header = title.parentElement

header.insertBefore(p, title)

// 3.2 - appendChild
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")

navLinks.appendChild(li)

// 3.3 - replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo titulo"

header.replaceChild(h2 , title)

// 4 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo")

console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)

mainContainer.appendChild(h3)

// 5 - Atributos
const firstLink = navLinks.querySelector("a")
console.log(firstLink)

firstLink.setAttribute("href" , "https://www.google.com/")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target" , "_blank")

