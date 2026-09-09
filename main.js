// let nota = Number(prompt("Digite sua nota: "))

// if (nota >= 6) {  
// // bloco de código true
//   alert("Aprovado!")
// } else if (nota >=4) {
//     alert("Recuperação!")
// } else {
//     alert("Reprovado!")
// }

// let idade = Number(prompt("Digite sua idade: "))

// if (idade <= 12){
//     alert("Criança")
// } else if (idade <= 18) {
//     alert("adolescente")
// } else if (idade <= 60) {
//     alert("Adulto")
// } else {
//     alert("Idoso")
// }

// let valor = Number(prompt("Valor da compra: "))
// let deseconto = 0

// if (valor <= 100) {
//     let valor_total = valor * 1
//     alert("sem descontos")
// } else if (valor <= 299.99) {
//     let valor_total = valor * 0.9
//     alert('10% de desconto: ${valor_total}')
// } else if (valor <= 499.99) {
//     let valor_total = valor * 0.8
//     alert('20% de desconto: ${valor_total}')
// } else {
//     let valor_total = valor * 0.7
//     alert('30% de desconto: ${valor_total}')
// }

let total = Number(prompt("Digite o valor da compra: "))

if (total <= 200 ) {
    let valor_descontado = total * 0.25
    alert('valor : ${valor_descontado}')
} else if (total <= 1000) {
    let valor_descontado = total * 0.1
    alert('valor descontado: ${valor_descontado}')
} else {
    let valor_descontado = total * 1
    alert("SEM DESCONTOS!")
}





