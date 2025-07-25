let carrito = [];
let products = [];

let productCard = document.getElementById("product-card");

fetch("../DB/dataIphone.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    products.forEach((product) => {
      const cards = document.createElement("div");
      cards.className = "cards-productos";
      cards.innerHTML = `<img class="img-producto" src="${product.imagen}" alt="${product.nombre}">
                                <h3>${product.nombre}</h3>
                                <span class="precio">$${product.precio}</span>
                                <button class="add-cart" id="${product.id}">Comprar</button>`;
      productCard.appendChild(cards);
    });
    agregarAlCarrito();
  })
  .catch((err) => console.error("Error al cargar los productos:", err));

function agregarAlCarrito() {
  const botones = document.querySelectorAll(".add-cart");
  botones.forEach((boton) => {
    boton.onclick = (e) => {
      const productId = e.currentTarget.id;
      const selectedProduct = products.find(
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
