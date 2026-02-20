// 1 - Metodos
let animal = {
    nome: "Bob",

    latir: function(){
        console.log("au au")
    },
    getNome: function(){
        return this.nome
    },
    setNome: function(novoNome){
        this.nome = novoNome
    },
}
console.log(animal.nome)
animal.latir()
animal.setNome('Loki')
console.log(animal.getNome())

// 2 - Prototype
const text = "asd"
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const myObj = {
    a:'b'
}
console.log(Object.getPrototypeOf(myObj))

const myObj2 = Object.create(myObj)

console.log(myObj2)

console.log(Object.getPrototypeOf(myObj2) === myObj)
