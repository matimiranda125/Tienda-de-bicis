// const listabicis = document.querySelector("#contenedor-bicis");

// fetch("api.json")
//     .then(response => response.json())
//     .then(datos => {
//         datos.forEach(bicis => {
//             const li = document.createElement("li");
//             li.innerText = bicis.nombre + " $ " + bicis.precio;
//             listabicis.append(li);
//         });
//     });

let listabicis = []

fetch('api.json')
    .then((response) => response.json())
    .then((datos) => {
        listabicis = datos
        console.log(listabicis)
        bicis.forEach((bicis) => {
            const div = document.createElement('div')
            div.classList.add('bicis')

            div.innerHTML = `
                            <img src=${bicis.img} alt="">
                            <h3>${bicis.nombre}</h3>
                            <p class="precioProducto">Precio: $${bicis.precio}</p>
                            <button onclick="agregarAlCarrito(${bicis.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                        `
            productosContainer.append(div)
        })
        listabicis.push(datos);
    })
    