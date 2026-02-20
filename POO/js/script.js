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

