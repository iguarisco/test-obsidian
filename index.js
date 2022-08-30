
// Doy la bienvenida a la pagina

alert("Bienvenido a la tienda de deportes! Estamos orgullosos que nos tenga en cuenta!")
alert("A continuación, ingrese la opcion del producto que desea llevar. Para salir, ingrese 0")

// Pido opcion de numero, cantidad de productos y defino el total en 0 
let seleccionarProductos = Number(prompt( "1-Zapatos de Futbol $3000\n 2-Medias de Futbol $1500\n 3-Pantalón deportivo $5000\n 4-Camperón deportivo $6000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}

// Mientras que el usuario seleccione seleccione productos, la funcion ira sumando los precios 

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("Le gustaron los Zapatos de Futbol?, Indique la cantidad por favor!"))
            total += cantidad(seleccionarCantidad, 3000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("Le gustaron las Medias de Futbol?, Indique la cantidad por favor!"))
        total += cantidad(seleccionarCantidad, 1500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("Le gustaron los Pantalones deportivo?, Indique la cantidad por favor!"))
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("Le gustaron los Camperones deportivo?, Indique la cantidad por favor!"))
      total += cantidad(seleccionarCantidad, 6000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-Zapatos de Futbol $3000\n 2-Medias de Futbol $1500\n 3-Pantalón deportivo $5000\n 4-Camperón deportivo $6000 "))
}

// Total de la compra 

alert("El total de la compra es de: $" + total)

// Establecemos que por pagar más de x precio, el envio tiene costo o es gratuito

const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

// De acuerdo al metodo de pago, hay descuento o no 

const metodoDePago = () => {
  let metodo = prompt("Ingrese el metodo de pago por favor, puede ser tarjeta o efectivo\n Recuerde que si paga con efectivo lleva descuento! " )
  if (metodo == "tarjeta") {
    total *= 1.1
    alert("El total de la compra es: $" + total)
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("Accedés un descuento de $1000, el total de la compra es: $" + total)
  }

  
}

envio()
metodoDePago()


alert("Gracias por la compra!") 