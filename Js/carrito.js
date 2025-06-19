let carritoCompra = document.getElementById("carrito-content");

let carritoCargado = localStorage.getItem("carrito");
carritoCargado = JSON.parse(carritoCargado);

function mostrarCarrito(itemCarrito) {
    itemCarrito.forEach((producto) => {
        const cardCompra = document.createElement("div");
        cardCompra.innerHTML = `<h3>${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <button class="eliminar-item">Eliminar</button>`;
        carritoCompra.appendChild(cardCompra);
    });
}

mostrarCarrito(carritoCargado);
