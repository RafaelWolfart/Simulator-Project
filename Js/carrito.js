let carritoCompra = document.getElementById("carrito-content");

let carritoCargado = localStorage.getItem("carrito") || "[]";
carritoCargado = JSON.parse(carritoCargado);

function mostrarCarrito(itemCarrito) {
  itemCarrito.forEach((producto) => {
    const cardCompra = document.createElement("div");
    cardCompra.innerHTML = `<h3>${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <button class="eliminar-item" id="${producto.id}">Eliminar</button>`;
    carritoCompra.appendChild(cardCompra);
  });
}

mostrarCarrito(carritoCargado);

const eliminarItem = document.querySelectorAll(".eliminar-item");
eliminarItem.forEach(
  (boton) =>
    (boton.onclick = (e) => {
      const itemID = e.currentTarget.id;
      const itemIndex = carritoCargado.findIndex((item) => item.id == itemID);
      if (itemIndex !== -1) {
        carritoCargado.splice(itemIndex, 1);
        console.log("producto eliminado");
      }
      localStorage.setItem("carrito", JSON.stringify(carritoCargado));
    })
);

console.log(carritoCargado);
