// 1 - Array
let list = [1,2,3,4,5]
console.log(list)
console.log(typeof list)

console.log(list[0])

list.forEach(element => {
    console.log(element)
})

// 2 - Propriedades
const numbers = [5,3,4]
console.log(numbers.length)

// 3 - Métodos
const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

// 

const text = "algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase)
console.log(text.indexOf("g"))

// 4 - Objetos
const person = {
    name: "Luis",
    age: 23,
    job: 'Programador'
}
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 5 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    KM: 20000,
}
console.log(car)

car.doors = 4
console.log(car)

delete car.KM
console.log(car)

const obj = {
    a: "teste",
    b: true
}
console.log(obj instanceof Object)

const obj2 = {
    c:[]
}
Object.assign(obj2, obj)
console.log(obj2)

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 6 - Mutação
const a ={
    name: "Mutação"
}
const b = a 
console.log(a)
console.log(b)

// 7 - Loops em arrays
const users = ['luis', 'matheus' , "pedro"]
for(let x=0; x<users.length; x++){
    console.log(users[x])
}
users.forEach(element => {
    console.log(element)
});

// 11 - push e pop
let array = ["a","b","c"]
array.push("d")
console.log(array)

array.pop()
console.log(array)

const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

// 12 - Shift and Unshit
array.shift()
console.log(array)

array.unshift("a")
console.log(array)

// 13 - indexOf and lastIndexOf
const myElements = ['Morango' , 'Maça', 'Abacate' , 'Pêra', 'Abacate']

console.log(myElements.indexOf('Maça'))
console.log(myElements.indexOf('Abacate'))
console.log(myElements.lastIndexOf('Abacate'))

// 14 - Slice
array = ["a","b","c"]
const subArray = array.slice(0,2)

console.log(array)
console.log(subArray)

// 15 - forEach
list = [1,2,3,4,5]
list.forEach(element => {
    console.log(element)
})