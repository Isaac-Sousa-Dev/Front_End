var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]

pos = lista.indexOf("Vermelho")
console.log(pos)

lista.splice(pos, 1)
console.log(lista)