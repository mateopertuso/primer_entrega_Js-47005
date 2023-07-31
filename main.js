function calcularCostoTotal() {
    alert('Bienvenido|a a la tienda, continúemos con la compra!');

    let tipoPrenda = prompt(`Selecciona el tipo de prenda: 
    -Remeras
    -Pantalones
    -Camperas
    -Calzado
    -Camisas
    -Accesorios`);

    switch (tipoPrenda) {
        case "Remeras" .toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Pantalones" .toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Camperas" .toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Calzado" .toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Camisas" .toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Accesorios" .toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        default:
            alert(`Debes elegir un tipo de prenda, por favor.`)
            tipoPrenda = prompt(`Selecciona el tipo de prenda: 
            -Remeras
            -Pantalones
            -Camperas
            -Calzado
            -Camisas
            -Accesorios`);
    };

    const cantidadDeProductos = parseInt(
        prompt("Ingrese la cantidad de productos:")
    );

    let costoTotal = 0;
    for (let i = 1; i <= cantidadDeProductos; i++) {
        const precioProducto = parseFloat(
            prompt(`Ingrese el precio del producto ${i}:`)
        );

        if (!isNaN(precioProducto) && precioProducto > 0) {
            costoTotal += precioProducto;
        } else {
            alert("El precio ingresado es inválido. Inténtelo nuevamente.");
            i--;
        }
    }
    alert(`El costo total de los productos es: $${costoTotal.toFixed(2)}`);
}
calcularCostoTotal()

