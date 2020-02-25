// Initilization of calculator screen value
let box = document.getElementById("display");
box.value = "";

// append character to screen
function agregarPantalla(e) {
  box.value += e;
  if (e == "c") {
    borrarPantalla();
  }
}

// reset screen
function borrarPantalla() {
  box.value = '';
}

// evaluate a mathematical expression string
function igual() {
  let s = box.value;
  box.value  = String(eval(s));
}

function borrarAnterior() {
  let s = box.value;
  let len = s.length;
  if (len > 0) {
    s = s.slice(0, len-1);
  }
  box.value = s;
}