const productos = [
    { 
        id: 1, 
        nombre: "Laptop", 
        precio: 1500 

    },
    { 
        id: 2, 
        nombre: "Smartphone", 
        precio: 800 

    },
    { 
        id: 3, 
        nombre: "Tablet", 
        precio: 500 

    },
    { 
        id: 4, 
        nombre: "Auriculares", 
        precio: 100 

    },
    {
        id: 5, 
        nombre: "Monitor", 
        precio: 300 
        
    },
    { 
        id: 6, 
        nombre: "Teclado", 
        precio: 150 

    },
    { 
        id: 7,
        nombre: "Mouse", 
        precio: 60 

    },
    { 
        id: 8, 
        nombre: "Cargador", 
        precio: 30 

    },
    { 
        id: 9, 
        nombre: "Impresora", 
        precio: 250
    },
    { 
        id: 10, 
        nombre: "Router", 
        precio: 80
    }
];

let carrito = [];

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";

    for (let i = 0; i < productos.length; i++) {
        mensaje += `${productos[i].id}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }

    mensaje += "Ingrese el número del producto que desea agregar al carrito.";

    return mensaje;
}


function agregarAlCarrito(idProducto) {

    let productoEncontrado = null;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === idProducto) {
            productoEncontrado = productos[i];
            break;
        }
    }


    if (productoEncontrado) {
        carrito.push(productoEncontrado);

        alert(`${productoEncontrado.nombre} ha sido agregado al carrito.`);

        console.log(`${productoEncontrado.nombre} agregado. Carrito actual:`, carrito);
    } else {
        alert("Producto no encontrado.");
    }
}

function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    if (total > 20000) {
        const descuento = total * 0.10;

        total -= descuento;

        alert(`Se ha aplicado un descuento de $${descuento}. Total con descuento: $${total}`);
    }

    alert(`El total de su compra es: $${total}`);

    console.log("Total de la compra:", total);

}

let seguirComprando = true;

while (seguirComprando) {

    const seleccion = parseInt(prompt(mostrarProductos()), 10);

    agregarAlCarrito(seleccion);

    seguirComprando = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase() === "si";

}

calcularTotal();