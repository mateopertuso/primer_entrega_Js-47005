/* console.log('Serás atendido por un asistente mayor.');

let asistentes = [
    {
        name: 'Mateo',
        edad: 22,
    },
    {
        name: 'Gaston',
        edad: 18,
    },
    {
        name: 'Priscila',
        edad: 16,
    },
    {
        name: 'Luana',
        edad: 25,
    },
    {
        name: 'Bautista',
        edad: 17,
    },
    {
        name: 'Agustina',
        edad: 29,
    }
];


let approved = asistentes.filter(asistent => asistent.edad >= 18);
console.log(approved)

console.log('A continuación podrás saber más acerca de él.');

let asistente = {
    nombre: "Mateo Pertuso",
    edad: 22,
    direccion: "Canelones, Uruguay",
    telefono: 59899743316,
};

console.log("Usted será atendido por");
console.log(asistente);

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
        case "Remeras".toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Pantalones".toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Camperas".toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Calzado".toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Camisas".toLowerCase():
            alert(`Perfecto, continuemos eligiendo la cantidad :)`);
            break;
        case "Accesorios".toLowerCase():
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


const productos = [
    { id: 1, nombre: "taza" },
    { id: 2, nombre: "pelota" },
    { id: 3, nombre: "botella" },
];

let nombre = prompt(`Te queremos obsequiar con un producto por la compra, podes elegir entre: 
    -taza
    -pelota
    -botella`);

let producto;

for (const item of productos) {
    if (item.nombre === nombre) {
        producto = item;
    }
}

if (producto) {
    let mensaje = `
      ID: ${producto.id}
      Nombre: ${producto.nombre}
      MUCHAS GRACIAS POR LA COMPRA!
    `;

    alert(mensaje);
} else {
    alert("El producto no se ha encontrado en la lista");
}

 */

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            saveLocal();
        }
    });
});

//set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

function obtenerJsonPropio1() {
    const URLJSON = "C:\Users\Mateo\OneDrive\Escritorio\Mis proyectos\ECOMMERCE-CODER\server.json";
    fetch(URLJSON)
        .then(resp => resp.json())
        .then((data) => {
            console.log(data.productosShop);
            const listaProductos = data.productosShop; //esto es un array
            console.log(listaProductos);

            listaProductos.forEach(shop => {
                document.getElementById('shop-productos').innerHTML += `
                <tr>
                <td>${shop.prenda}</td>
                <td>${shop.talle}</td>
                <td>${shop.color}</td>
                <td>${shop.stock}</td>
                </tr>
            `;
            });

        })
        .catch((error) => console.log(error));

}

obtenerJsonPropio1();
