/* Arquivo JS aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
var test = Array(10)
test[0] = 'Oi'
test[9] = 'Tudo bem?'
test[10] = 'Opa!'
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'

//ADICIONAR no final push = empurre
produtos.push('Acúcar', 'Trigo')      
codigos.push(40, 50, 60, 70)          
meses.push('Mai', 'Jun', 'Ago', '07') 

// ADICIONAR  no final pop = estorar
produtos.pop()
codigos.pop()
meses.pop()

//ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maça')

//REMOVER do inicio shift
produtos.shift()

//  REMOVER de uma posição específica splice
//  splice = emendar
// posição inicial, quantos remover
codigos.splice(1, 3)

//  COPIAR array splice = fatiar porção
//  posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

// VER TAMANHO DO ARRAY lenght comprimento
// meses.length
// meses1.length
// meses2.length

// spreed operator ... copiar
let teste = [...produtos, 'Ovo', 'Pera']