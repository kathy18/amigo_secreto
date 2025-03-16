// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para realizar el sorteo.");
        return;
    }

    let disponibles = [...amigos];
    let resultado = {};

    amigos.forEach((amigo) => {
        let posibles = disponibles.filter((nombre) => nombre !== amigo);
        if (posibles.length === 0) {
            alert("No se pudo realizar un sorteo sin repetidos. Inténtalo nuevamente.");
            return;
        }
        let seleccionado = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigo] = seleccionado;
        disponibles = disponibles.filter((nombre) => nombre !== seleccionado);
    });

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    for (let [amigo, secreto] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        listaResultado.appendChild(li);
    }
}
