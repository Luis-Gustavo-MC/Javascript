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

// 3 - Classes Basicas
const cachorro = {
    reca: null, 
    patas: 4,
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.reca = "pastor alemaõ"

console.log(pastorAlemao)
console.log(pastorAlemao.patas)

// 4 - Construct
function criarCachorro(nome , raca){
    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca
    return cachorro
}
const Bob = criarCachorro("Bob", "bulldog")
console.log(Bob)

// 5 - New
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}
const husky = new Cachorro("ozzy", "husky")
console.log(husky)

// 6 - Metodos na função Construtora
Cachorro.prototype.uivar = function(){
    console.log("Auuu")
}
husky.uivar()

// Classes es6
class Gato{
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}
Gato.prototype.miar = function() {console.log("miau!")}
const lufy = new Gato("lufy" , "Vira-Lata")

console.log(lufy)
lufy.miar()