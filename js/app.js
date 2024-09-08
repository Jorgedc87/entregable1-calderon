// Defino algunas variables
const pasajeros = []; // Array para guardar los datos de los pasajeros
const descuentoIdaYVuelta = 0.85; // Descuento del 15% para pasajes de ida y vuelta
const precioPasaje = 41000; // Precio del pasaje

const preguntaCantidad = () => prompt('Ingrese la cantidad de pasajes que desea comprar'); // Pregunta la cantidad de pasajes a comprar

// Verifica que cantidad sea un número válido (positivo) y los intentos sean menos de 3 con while
const verificaCantidad = cantidad => {
  let intentos = 0;
  while (isNaN(cantidad) || cantidad <= 0) {
    cantidad = prompt('Ingrese una cantidad válida (mayor a 0)');
    intentos++;
    if (intentos === 2) {
      alert('Cantidad inválida');
      return false;
    }
  }
  return true;
}

// Verifica que el nombre no sea null y los intentos sean menos de 3 con while
const verificaNombre = nombre => {
  let intentos = 0;
  while (!nombre) {
    nombre = prompt('Ingrese un nombre válido');
    intentos++;
    if (intentos === 2) {
      alert('Nombre inválido. Se cancelará la compra');
      return false;
    }
  }

  return nombre;
}


// Verifica que el DNI sea un numero entero y los intentos sean menos de 3 con while
const verificaDni = dni => {
  let intentos = 0;
  while (!parseInt(dni)) {
    dni = prompt('Ingrese un DNI válido');
    intentos++;
    if (intentos === 2) {
      alert('DNI inválido. Se cancelará la compra');
      return false;
    }
  }

  return dni;
}

// Pide datos del pasajero
const consultaDatos = (i, idaYVuelta) => {
  const nombre = verificaNombre(prompt(`Ingrese el nombre del pasajero ${i + 1}`));
  if (!nombre) return false;
  const dni = verificaDni(prompt(`Ingrese el DNI del pasajero ${nombre}`));
  if (!dni) return false;
  if(idaYVuelta){
    pasajeros.push({ nombre, dni: parseInt(dni), tipo: 'ida' , precio: precioPasaje * descuentoIdaYVuelta });
    pasajeros.push({ nombre, dni: parseInt(dni), tipo: 'vuelta' , precio: precioPasaje * descuentoIdaYVuelta });
  }else{
    pasajeros.push({ nombre, dni: parseInt(dni), tipo: 'ida' , precio: precioPasaje });
  }

  return true;
}

// Calcula el total de la compra
const calculaTotal = () => {
  let total = 0;
  for (let i = 0; i < pasajeros.length; i++) {
    total += pasajeros[i].precio;
  }

  return total;
}

// Resetea la compra al finalizar
const resetCompra = () => {
  pasajeros.length = 0;
}

/* 
  Función principal para comprar pasajes
*/
const compraPasaje = () => {
  // Resetea la compra
  resetCompra();

  // Pregunta la cantidad de pasajes
  let cantidad = preguntaCantidad();

  // Verifica que la cantidad sea válida
  if (!verificaCantidad(cantidad)) return false;

  const idaYVuelta = confirm('¿Es pasaje de ida y vuelta?');

  // Calcula precio pasaje si es ida y vuelta o solo ida
  if(idaYVuelta){
    alert('Se aplicará un descuento del 15% por compra de pasaje de ida y vuelta');
  };

  // Luego pido datos de cada pasajero
  for(i=0;i<cantidad;i++){
    const pasajero = consultaDatos(i, idaYVuelta);
    if (!pasajero) return alert('Compra cancelada');
  }

  // Confirma compra
  if (confirm(`El monto total a pagar es de ${calculaTotal()} \n \n¿Desea confirmar la compra?`)) {
    alert(`Compra realizada con éxito`);
  } else {
    alert('Compra cancelada');
  }

  // Muestra en consola una mejor tabla
  console.table(pasajeros);

}