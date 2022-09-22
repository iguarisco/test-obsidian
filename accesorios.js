// Doy la bienvenida a la pagina

alert("Bienvenido a la tienda de accesorios! Estamos orgullosos que nos tenga en cuenta!")
alert("A continuación, ingrese la opcion del producto que desea llevar. Para salir, ingrese 0")

// Pido opcion de numero, cantidad de productos y defino el total en 0 
let seleccionarProductos = Number(prompt( "1- Colgantes $300\n 2- Caravanas $150\n 3- Pinturas / Dibujos $500\n"))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}

// Mientras que el usuario seleccione seleccione productos, la funcion ira sumando los precios 

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("Le gustaron colgantes?, Indique la cantidad por favor!"))
            total += cantidad(seleccionarCantidad, 300)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("Le gustaron las caravanas?, Indique la cantidad por favor!"))
        total += cantidad(seleccionarCantidad, 150)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("Le gustaron los dibujos?, Indique la cantidad por favor!"))
      total += cantidad(seleccionarCantidad, 500)
    break;
    // case 4:
    //   seleccionarCantidad = Number(prompt("Le gustaron los Camperones deportivo?, Indique la cantidad por favor!"))
    //   total += cantidad(seleccionarCantidad, 6000)
    // break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1- Colgantes $300\n 2- Caravanas $150\n 3- Pinturas / Dibujos $500\n"))
}

// Total de la compra 

alert("El total de la compra es de: $" + total)

// Establecemos que por pagar más de x precio, el envio tiene costo o es gratuito

const envio = () => {
    if (total >= 800) {
      alert("El envio es gratuito")
    }else{
      total += 500
      alert("el costo de envio es de 500, el total es: " + total)
    }
}

// De acuerdo al metodo de pago, hay descuento o no 

const metodoDePago = () => {
  let metodo = prompt("Ingrese el metodo de pago por favor, puede ser tarjeta o efectivo\n Recuerde que si paga con efectivo lleva descuento! " )
  if (metodo == "tarjeta") {
    total *= 1.1
    alert("El total de la compra es: $" + total)
  }else if ( metodo == "efectivo") {
    total -= 300
    alert("Accedés un descuento de $300, el total de la compra es: $" + total)
  }

  
}

envio()
metodoDePago()


alert("Gracias por la compra!") 