let carrito = [];
let productosAcc = [];

let accCard = document.getElementById("product-card-acc");

fetch("../DB/dataAccesorios.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }
    return response.json();
  })
  .then((data) => {
    productosAcc = data;
    productosAcc.forEach((product) => {
      const cards = document.createElement("div");
      cards.className = "cards-productos";
      cards.innerHTML = `<img class="img-producto" src="${product.imagen}" alt="${product.nombre}">
                                <h3>${product.nombre}</h3>
                                <span class="precio">$${product.precio}</span>
                                <button class="add-cart" id="${product.id}">Comprar</button>`;
      accCard.appendChild(cards);
    });
    agregarAlCarrito();
  })
  .catch((err) => console.error("Error al cargar los productos:", err));

function agregarAlCarrito() {
  const botones = document.querySelectorAll(".add-cart");
  botones.forEach((boton) => {
    boton.onclick = (e) => {
      const productId = e.currentTarget.id;
      const selectedProduct = productosAcc.find(
        (product) => product.id == productId
      );
      if (carrito) {
        carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      } else {
        carrito = [];
      }
      carrito.push(selectedProduct);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      Toastify({
        text: "Producto agregado al carrito",
        duration: 1500,
        destination: "pages/carrito.html",
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
    };
  });
}
