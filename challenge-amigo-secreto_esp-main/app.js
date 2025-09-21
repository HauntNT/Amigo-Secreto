// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(elemento) {
    let elementoHTML = document.getElementById("amigo");
    let texto = elementoHTML.value.trim();
    if (texto == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(texto);
        elementoHTML.value = "";
        imprimirAmigos();
    }
    return;
}
function imprimirAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No es posible elegir amigo, si no se ha agregado.")
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos.at(numeroAleatorio);
        let resultado = document.getElementById("resultado");
        let li = document.createElement("li");
        resultado.innerHTML = "";
        li.textContent = amigoSorteado;
        resultado.appendChild(li);
    }
}
console.log(amigos);