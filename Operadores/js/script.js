// 1 - Number
console.log(typeof 2)
console.log(typeof 2.2)
console.log(typeof -2)

// 2 - Operadores
console.log(10 - 2)
console.log(10 + 2)
console.log((10 + 2)* 2)
console.log((10 + 2)* 2 / 2)

// 3 - Special numbers
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)

// 4 - Strings
console.log("Isso é uma string")
console.log(typeof "Isso é uma string")

// 5 - Special characters
console.log("A\nB")
console.log("A\tB")

// 6 - Concatenação
console.log("S" + 10 + "A")

// 7 - Interpolação
let v = 10.00;
console.log(`Eu tenho R$ ${v}`)

// 8 - Booleans
let a = true;
let b = false;
console.log(`${a}` + "\n" + `${b}`)
console.log(5>20)
console.log(5<20)
console.log(typeof (5<20))

// 9 - Comparações
console.log(10>=5) //true
console.log(10<5) //false
console.log(10==5) //false
console.log(10==10) //true
console.log(10=='10') //true

// 10 - Idêntico
console.log(10=='10') //true
console.log(10==='10') //false
console.log(10!=='10') //true

// 11 - empty values
console.log(typeof null , typeof undefined)

// 12 - mudança de tipos
console.log(5* null)
console.log("teste" * "opa")
console.log("10" + 1)
console.log("10" - 1)