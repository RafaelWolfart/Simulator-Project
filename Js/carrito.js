let carritoCompra = document.getElementById("carrito-content");

let carritoCargado = JSON.parse(localStorage.getItem("carrito")) || [];

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
      Toastify({
        text: "Producto eliminado del carrito",
        duration: 1500,
        destination: "pages/carrito.html",
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #e5e5e7, #f5f5f7)",
          color: "black",
          borderRadius: "10px",
        },
      }).showToast();
      setTimeout(() => {
        location.reload();
      }, 1000);
    })
);

console.log(carritoCargado);

const totalCompra = carritoCargado.reduce((acc, item) => acc + item.precio, 0);
const mostrarTotal = document.createElement("div");
mostrarTotal.className = "total-compra";
mostrarTotal.innerHTML = `<h3>Total: $${totalCompra}</h3>
                          <button class="compra-final" id="compra-final">Finalizar compra</button>
                          <button class="vaciar-carrito" id="vaciar-carrito">Vaciar carrito</button>
                        `;
carritoCompra.appendChild(mostrarTotal);

const finalCompra = document
  .getElementById("compra-final")
  .addEventListener("click", () => {
    if (carritoCargado.length === 0) {
      Toastify({
        text: "Tu carrito aún está vacío. Ve a la tienda",
        duration: 1500,
        destination: "../index.html",
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #e5e5e7, #f5f5f7 )",
          color: "black",
          borderRadius: "10px",
        },
      }).showToast();
      return;
    }

    window.location.href = "../pages/form.html";
    localStorage.removeItem("carrito");
  });

const vaciarCarrito = document.getElementById("vaciar-carrito");
vaciarCarrito.addEventListener("click", () => {
  vaciar();
});

function vaciar() {
  localStorage.removeItem("carrito");
  Toastify({
    text: "Carrito vaciado con éxito!",
    duration: 1500,
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #e5e5e7, #f5f5f7)",
      color: "black",
      borderRadius: "10px",
    },
  }).showToast();
  setTimeout(() => {
    location.reload();
  }, 1000);
}
