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