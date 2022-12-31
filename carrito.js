const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
        <h1 class="modal-header.title"> Carrito </h1>
        `;

  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.classname = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((producto) => {

    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
            <img src="${producto.imagen}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio} $</p>
            <span class ="restar"> - </span>
            <p>Cantidad: ${producto.cantidad}</p>
            <span class ="sumar"> + </span>
            <p>Total: ${producto.cantidad * producto.precio}</p>
            <span class="delete-product"> ❌ </span>
            
            `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (producto.cantidad !== 1) {
        producto.cantidad--;
      }

      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      producto.cantidad++;
      saveLocal();
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(producto.id);
    });

  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div")
  totalBuying.className = "total-content"
  totalBuying.innerHTML = `Total a pagar: ${total} $
     
    <button type="button" id="comprarCarrito" onClick="compra()" class="btn btn-secondary">Comprar</button>`;
  modalContainer.append(totalBuying);


};

function compra() {
  if (carrito.length > 0) {
    Swal.fire({
      title: 'Desea confirmar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Compra confirmada',
          text: 'Usted sera redirigido a la pagina principal',
        })
        localStorage.clear();
        setTimeout(function () { window.location.href = "../index.html"; }, 4000);
      }
    })
  }


  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El carrito esta vacio',
    })
  }
}


verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCuonter();
  saveLocal();
  pintarCarrito();
};

const carritoCuonter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLenght = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLenght));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCuonter();