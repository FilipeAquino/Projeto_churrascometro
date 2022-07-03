// carne : 400g por pessoa, mais de 6h - 650g
// cerveja: 1200 ml por pessoa,mais de 6h - 2000ml
// refrigerante/agua: 1000ml por pessoa, mais de 6h - 1500ml
// crianças valem por 0,5

let inputadultos = document.getElementById("ad")
let inputcrianças = document.getElementById("cr")
let horas = document.getElementById("hr")

let res = document.getElementById("res")


function calcular() {

    let adultos = inputadultos.value
    let crianças = inputcrianças.value
    let tempo =  horas.value

    let totalCarne = (carne(tempo) * adultos) + (carne(tempo) / 2 * crianças)
    let totalCerveja = (cerveja(tempo) * adultos)
    let totalBebidas = (bebidas(tempo) * adultos) + (bebidas(tempo) / 2 * crianças)


    res.innerHTML = `<p>${totalCarne/1000}kg de carne`
    res.innerHTML += `<p>${Math.ceil(totalCerveja/355)} latas de cerveja`
    res.innerHTML += `<p>${Math.ceil(totalBebidas/2000)} guarrafa(s) de 2L`

}

function carne(tempo) {
    if (tempo >= 6){
        return 650
    } else{
        return 400
    }
}

function cerveja(tempo) {
    if (tempo >= 6){
        return 2000
    } else{
        return 1200
    }
}

function bebidas(tempo) {
    if (tempo >= 6){
        return 1500
    } else{
        return 1000
    }
}