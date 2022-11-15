//objetos

let bicidogma = {
    marca: "Pinarello",
    modelo: "Dogma",
    precio: "1.450.000"
}
console.log(bicidogma);

let bicicapra = {
    marca: "Capra",
    modelo: "YT",
    precio: "1.980.000"
}
console.log(bicicapra);
let bicibmc = {
    marca: "MBC",
    modelo: "TeamMachine",
    precio: "2.190.000"
}
console.log(bicibmc);
let bicicervelo = {
    marca: "Cerveló",
    modelo: "S5",
    precio: "2.340.000"
}
console.log(bicicervelo);
let bicicaprapro = {
    marca: "Capra",
    modelo: "CF Pro Race",
    precio: "3.320.000"
}
console.log(bicicaprapro);


//Arrays
console.log("Estos son los modelos de bicis disponibles por ahora: ");
const bicis = [bicidogma,bicibmc,bicicapra,bicicervelo,bicicaprapro];
console.log(bicis[0]);
console.log(bicis[1]);
console.log(bicis[2]);
console.log(bicis[3]);
console.log(bicis[4]);

//Metodos de busqueda y filtrado
// let numfiltrado = prompt("Ingrese el precio minimo que quiere buscar");
// let resultado = bicis.filter(bicis => bicis.precio > numfiltrado);
// alert(resultado);

// let opcion = prompt("Ingrese el precio maximo que desea buscar");
// const preciobuscado = bicis.find (bici => {
//     return bici.precio > opcion;
// });

// console.log(preciobuscado);

let buscador = prompt("¿Desea buscar bicis dentro de un rango?");
if (buscador != "no"){
    let filtrado = prompt("Ingrese el precio maximo que desea pagar");
    let encontrado = bicis.filter(bicis => bicis.precio < filtrado)
    if(encontrado){
        encontrado.forEach(bicis => {
            let mensaje = 
                ` marca: ${bicis.marca}
                  modelo: ${bicis.modelo}
                  precio: ${bicis.precio}`
            console.log(mensaje);
        });
    } else {
        alert("No hay bicis en ese rango de precio");
    }
}

















