const bicis = [
    {
        id: "bicisruta 01",
        titulo: "Bicicleta de ruta 01",
        imagen: "./imagenes/Pinarello-21-22-PRINCE.png",
        categoria: {
            nombre: "ruta",
            id: "ruta"
        },
        precio: 1340000
    },
    {
        id: "bicisruta 02",
        titulo: "Bicicleta de ruta 02",
        imagen: "./imagenes/pinarello.jpg",
        categoria: {
            nombre: "ruta",
            id: "ruta"
        },
        precio: 1340000
    },
    {
        id: "bicisruta 03",
        titulo: "Bicicleta de ruta 03",
        imagen: "./imagenes/cervelo-s5.jpg",
        categoria: {
            nombre: "ruta",
            id: "ruta"
        },
        precio: 1780000
    },
    {
        id: "bicisruta 04",
        titulo: "Bicicleta de ruta 04",
        imagen: "./imagenes/Cerveló.webp",
        categoria: {
            nombre: "ruta",
            id: "ruta"
        },
        precio: 1780000
    },
    {
    id: "bicisruta 05",
    titulo: "Bicicleta de ruta 05",
        imagen: "./imagenes/bmc-teammachine_slr01.png",
    categoria: {
        nombre: "ruta",
        id: "ruta"
    },
    precio: 1000
    },
    //Bicicletas de montaña
    {
        id: "bicismtb",
        titulo: "Bicicleta de montaña 01",
        imagen: "./imagenes/bmc-fourstroke-mtb-01.jpg",
        categoria: {
            nombre: "montaña",
            id: "montaña"
        },
        precio: 2350000
    },
    {
        id: "bicismtb",
        titulo: "Bicicleta de montaña 02",
        imagen: "./imagenes/bicis-scott-mtb-02.jpg",
        categoria: {
            nombre: "montaña",
            id: "montaña"
        },
        precio: 2570000
    },
    {
        id: "bicismtb",
        titulo: "Bicicleta de montaña 03",
        imagen: "./imagenes/Canyon lux-620-mtb-03.jpg",
        categoria: {
            nombre: "montaña",
            id: "montaña"
        },
        precio: 3290000
    },
    {
        id: "bicismtb",
        titulo: "Bicicleta de montaña 04",
        imagen: "./imagenes/trek-mtb-04.jpg",
        categoria: {
            nombre: "montaña",
            id: "montaña"
        },
        precio: 3890000
    },
    {
        id: "bicismtb",
        titulo: "Bicicleta de montaña 05",
        imagen: "./imagenes/specialized-epic-mtb-05.jpg",
        categoria: {
            nombre: "montaña",
            id: "montaña"
        },
        precio: 4460000
    },
    //Bicicletas de enduro
    {
        id: "bicisenduro",
        titulo: "Bicicleta de enduro 01",
        imagen: "./imagenes/bici-enduro-01.jpg",
        categoria: {
            nombre: "enduro",
            id: "enduro"
        },
        precio: 5120000
    },
    {
        id: "bicisenduro",
        titulo: "Bicicleta de enduro 02",
        imagen: "./imagenes/bici-enduro-02.jpg",
        categoria: {
            nombre: "enduro",
            id: "enduro"
        },
        precio: 4780000
    },
    {
        id: "bicisenduro",
        titulo: "Bicicleta de enduro 03",
        imagen: "./imagenes/bici-enduro-03.jpeg",
        categoria: {
            nombre: "enduro",
            id: "enduro"
        },
        precio: 4490000
    },
    {
        id: "bicisenduro",
        titulo: "Bicicleta de enduro 04",
        imagen: "./imagenes/bici-enduro-04.jpg",
        categoria: {
            nombre: "enduro",
            id: "enduro"
        },
        precio: 5130000
    },
    {
        id: "bicisenduro",
        titulo: "Bicicleta de enduro 05",
        imagen: "./imagenes/bici-enduro-05.jpg",
        categoria: {
            nombre: "enduro",
            id: "enduro"
        },
        precio: 5410000
    },
    {
        id: "bicisdescenso",
        titulo: "Bicicleta de descenso 01",
        imagen: "./imagenes/bici-descenso-01.jpg",
        categoria: {
            nombre: "descenso",
            id: "descenso"
        },
        precio: 6230000
    },
    {
        id: "bicisdescenso",
        titulo: "Bicicleta de descenso 02",
        imagen: "./imagenes/bici-descenso-02.jpg",
        categoria: {
            nombre: "descenso",
            id: "descenso"
        },
        precio: 6450000
    },
    {
        id: "bicisdescenso",
        titulo: "Bicicleta de descenso 03",
        imagen: "./imagenes/bici-descenso-03.jpg",
        categoria: {
            nombre: "descenso",
            id: "descenso"
        },
        precio: 6530000
    },
    {
        id: "bicisdescenso",
        titulo: "Bicicleta de descenso 04",
        imagen: "./imagenes/bici-descenso-04.jpg",
        categoria: {
            nombre: "descenso",
            id: "descenso"
        },
        precio: 6710000
    },
    {
        id: "bicisdescenso",
        titulo: "Bicicleta de descenso 05",
        imagen: "./imagenes/bici-descenso-05.jpg",
        categoria: {
            nombre: "descenso",
            id: "descenso"
        },
        precio: 6710000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

























