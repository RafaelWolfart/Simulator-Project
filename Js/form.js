document
  .getElementById("form-compra")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const tarjeta = document.getElementById("tarjeta").value.trim();
    const expiracion = document.getElementById("expiracion").value;
    const cvv = document.getElementById("cvv").value.trim();

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorDireccion = document.getElementById("errorDireccion");
    const errorTarjeta = document.getElementById("errorTarjeta");
    const errorExpiracion = document.getElementById("errorExpiracion");
    const errorCVV = document.getElementById("errorCVV");

    let isValid = true;

    if (nombre.length < 3) {
      errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
      isValid = false;
    } else {
      errorNombre.textContent = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorEmail.textContent = "Ingresa un correo electrónico válido.";
      isValid = false;
    } else {
      errorEmail.textContent = "";
    }

    if (direccion.length < 5) {
      errorDireccion.textContent =
        "La dirección debe tener al menos 5 caracteres.";
      isValid = false;
    } else {
      errorDireccion.textContent = "";
    }

    const tarjetaRegex = /^\d{16}$/;
    if (!tarjetaRegex.test(tarjeta)) {
      errorTarjeta.textContent = "La tarjeta debe tener 16 dígitos.";
      isValid = false;
    } else {
      errorTarjeta.textContent = "";
    }

    const fechaActual = new Date();
    const fechaExpiracion = new Date(expiracion);
    if (fechaExpiracion < fechaActual) {
      errorExpiracion.textContent = "La tarjeta ha expirado.";
      isValid = false;
    } else {
      errorExpiracion.textContent = "";
    }

    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      errorCVV.textContent = "El CVV debe tener 3 dígitos.";
      isValid = false;
    } else {
      errorCVV.textContent = "";
    }

    if (isValid) {
      Toastify({
        text: "Compra realizada exitosamente!",
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

      document.getElementById("form-compra").reset();

      setTimeout(function () {
        window.location.href = "../index.html";
      }, 2000);
    }
  });
