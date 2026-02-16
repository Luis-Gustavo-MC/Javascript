// 1 - Array
const list = [1,2,3,4,5]
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