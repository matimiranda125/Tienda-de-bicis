const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-Container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Swal.fire(
//     'Bienvenidos a nuestro Shop!',
//     'You clicked the button!',
//     'success'
//   );

productos.forEach((producto) => {

    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src=${producto.imagen} alt="${producto.imagen}">
        <h3>${producto.titulo}</h3>
        <p class="precio">${producto.precio}$ </p>
        `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                nombre: producto.titulo,
                precio: producto.precio,
                cantidad: producto.cantidad,


            });
            console.log(carrito);
            console.log(carrito.length);
            carritoCuonter();
            saveLocal();
        }
    });
});
//set item
const saveLocal = () => {

    localStorage.setItem("carrito", JSON.stringify(carrito))
};

// get item


    fetch("productos.json")
    .then(respuesta => respuesta.json())
    .then(bici => {
        bicis.forEach(bici => {
        const div = document.createElement("div");
        div.classList.add("container__shop__products__card");
        div.innerHTML = `
        <picture>
        <img src="${bicis.imagen}"
        alt="${bicis.nombre}" />
        </picture>
        <div class="container__shop__products__card-details">
        <div class="container__shop__products__card-details-content">
        <h4>${bicis.nombre}</h4>
        <p class="container__shop__products__card-details-content-price">
        <span>${bicis.precio}</span>
        </p>
        <button class="container__shop__products__card-details-content-button" id="${productos.id}">
        Agregar <i class="uil uil-shopping-cart"></i>
        </button>
        </div>
        </div>
        `
        content.append(div);
        productosTotal.push(productos);

    })
    })