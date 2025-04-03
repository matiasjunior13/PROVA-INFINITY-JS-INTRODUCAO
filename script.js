let numero_01 = Number(prompt("Digite o primeiro número: "))
let numero_02 = Number(prompt("Digite o segundo número: "))



console.log(`====== Abaixo estão as OPERAÇÕES ARITMÉTICAS BÁSICAS realizadas com os números que você digitou: ===== `)
let adicao = numero_01; adicao += numero_02; 
  console.log(`-- SOMA/ADIÇÃO dos números ${numero_01} e ${numero_02} que você digitou é : ( ${adicao} ) --`)

let subtracao = numero_01; subtracao -= numero_02;
  console.log(`-- SUBTRAÇÃO dos números ${numero_01} e ${numero_02} que você digitou é : ( ${subtracao} ) --`)

let multiplicacao = numero_01; multiplicacao *= numero_02; 
  console.log(`-- MULTIPLICAÇÃO dos números ${numero_01} e ${numero_02} que você digitou é : ( ${multiplicacao} ) --`)

let divisao = numero_01; divisao /= numero_02; 
  console.log(`-- DIVISÃO dos números ${numero_01} e ${numero_02} que você digitou é : ( ${divisao} ) --`)

let resto = numero_01; resto %= numero_02; 
  console.log(`-- RESTO dos números ${numero_01} e ${numero_02} que você digitou é : ( ${resto} ) --`)

