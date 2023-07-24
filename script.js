class Opcion {
    constructor(nombre, venceA) {
      this.nombre = nombre;
      this.venceA = venceA;
    }
  
    vence(opcion) {
      return this.venceA.includes(opcion.nombre);
    }
  }
  
  function jugarPiedraPapelTijera() {
    const rondas = parseInt(prompt("¿Cuántas rondas queres jugar?"));
  
    const opciones = [];
  
    const piedra = new Opcion("piedra", ["tijera"]);
    const papel = new Opcion("papel", ["piedra"]);
    const tijera = new Opcion("tijera", ["papel"]);
  
    opciones.push(piedra);
    opciones.push(papel);
    opciones.push(tijera);
  
    const nombreJugador1 = prompt("Ingresar el nombre del Jugador 1:");
    const nombreJugador2 = prompt("Ingresar el nombre del Jugador 2:");
  
    let victoriasJugador1 = 0;
    let victoriasJugador2 = 0;
  
    for (let i = 1; i <= rondas; i++) {
      console.log("Ronda " + i + ":");
  
      const jugador1 = obtenerOpcionJugador(nombreJugador1, opciones);
      const jugador2 = obtenerOpcionJugador(nombreJugador2, opciones);
  
      console.log(nombreJugador1 + ": " + jugador1.nombre);
      console.log(nombreJugador2 + ": " + jugador2.nombre);
  
      if (jugador1.nombre === jugador2.nombre) {
        console.log("Empate en la ronda " + i + ". Los dos eligieron " + jugador1.nombre + ".");
      } else if (jugador1.vence(jugador2)) {
        console.log("¡Ganó " + nombreJugador1 + " en la ronda " + i + "! " + jugador1.nombre + " le ganaste a " + jugador2.nombre + ".");
        victoriasJugador1++;
      } else {
        console.log("¡Ganó " + nombreJugador2 + " en la ronda " + i + "! " + jugador2.nombre + " le ganaste a " + jugador1.nombre + ".");
        victoriasJugador2++;
      }
  
      console.log("---------------------------------------");
    }
  
    if (victoriasJugador1 > victoriasJugador2) {
      console.log("¡Felicidades, " + nombreJugador1 + "! Ganaste el juego.");
    } else if (victoriasJugador1 < victoriasJugador2) {
      console.log("¡Felicidades, " + nombreJugador2 + "! Ganaste el juego.");
    } else {
      console.log("Empataron");
    }
  }
  
  function obtenerOpcionJugador(jugador, opciones) {
    let opcion;
    do {
      opcion = prompt(jugador + ", elige piedra, papel o tijera").toLowerCase();
    } while (!validarOpcion(opcion, opciones));
    return opciones.find((o) => o.nombre === opcion);
  }
  
  function validarOpcion(opcion, opcionesValidas) {
    return opcionesValidas.some((o) => o.nombre === opcion);
  }
  
  jugarPiedraPapelTijera();
