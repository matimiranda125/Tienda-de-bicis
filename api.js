const listabicis = document.querySelector("#contenedor-bicis");

fetch("api.json")
    .then(response => response.json())
    .then(datos => {
        datos.forEach(bicis => {
            const li = document.createElement("li");
            li.innerText = bicis.nombre + " $ " + bicis.precio;
            listabicis.append(li);
        });
    });