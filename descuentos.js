//const precioOriginal = 120;
//const descuento = 10;

function calcularPrecioConDescuento(precioOriginal,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function calclularDescuento(){
    const inputPrecio = document.getElementById("PrecioProducto");
    const precio = inputPrecio.value;
    const inputDescuento = document.getElementById("Descuento");
    const descuento = inputDescuento.value;
    const PrecioDescuento = calcularPrecioConDescuento(precio, descuento);
    const paPrecioDescuento = document.getElementById("paPrecioDescuento");

    const inputDescuentoCupon = document.getElementById("DescuentoCupon");
    const descuentoCupon = inputDescuentoCupon.value;
    if(descuentoCupon == 0){
        paPrecioDescuento.innerText = "el precio con descuento es: $" + PrecioDescuento;
    }else{
        const PrecioDescuentoCupon = calcularPrecioConDescuento(PrecioDescuento, descuentoCupon);
        paPrecioDescuento.innerText = "el precio con descuento es: $" + PrecioDescuentoCupon;
    }
    
}


//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//})