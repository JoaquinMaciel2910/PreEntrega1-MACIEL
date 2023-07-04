function jugarPiedraPapelTijera() {
    const rondas = parseInt(prompt("ELEGI CUANTAS RONDAS JUGAR"));

    let nombre1 = prompt("Indica tu nombre");
    let nombre2 = prompt("Indica tu nombre");
    let victoriasJugador1 = 0;
    let victoriasJugador2 = 0;

    for (let i = 1; i <= rondas; i++) {
        console.log("Ronda " + i + ":");

        const jugador1 = prompt(nombre1 + ", elegí : piedra, papel o tijera").toLowerCase();
        const jugador2 = prompt(nombre2 + ", elegí : piedra, papel o tijera").toLowerCase();

        console.log(nombre1 + ": " + jugador1);
        console.log(nombre2 + ": " + jugador2);

        if (jugador1 === jugador2) {
            console.log("Empataron en la ronda " + i + ". Los dos eligieron " + jugador1 + "y" + jugador2 + ".");
        } else if (
            (jugador1 === "piedra" && jugador2 === "tijera") ||
            (jugador1 === "papel" && jugador2 === "piedra") ||
            (jugador1 === "tijera" && jugador2 === "papel")
        ) {
            console.log("¡Ganó " + nombre1 + " en la ronda " + i + "! ");
            victoriasJugador1++;
        } else {
            console.log("¡Ganó " + nombre2 + " en la ronda " + i + "! ");
            victoriasJugador2++;
        }

        console.log("---------------------------------------");
    }

    if (victoriasJugador1 > victoriasJugador2) {
        console.log("¡GANASTE " + "¡Ganó " + nombre1 + "! ");
    } else if (victoriasJugador1 < victoriasJugador2) {
        console.log("¡GANASTE " + "¡Ganó " + nombre2 + "! ");
    } else {
        console.log("¡EMPATARON! :(");
    }
}

jugarPiedraPapelTijera();
