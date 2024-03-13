//alert("Hola este es mi Javascript");
//let nombre="Marta";
//nombre="maria"
//var nombre1="Marta";
//const nombre2="Marta";
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento "Acerca de Mí"
    let acercaDeMi = document.querySelector('#acerca h2');

    // Obtener el texto del elemento "Acerca de Mí"
    let textoAcercaDeMi = acercaDeMi.innerText.toLowerCase();

    // Definir el contenido del título
    let contenidoTitulo = "Acerca de mí"; // Modificamos la variable para que coincida exactamente con el texto del elemento

    // Verificar si el texto coincide con el contenido deseado
    if (textoAcercaDeMi === contenidoTitulo) { // Cambiamos el nombre de la variable a "contenidoTitulo" para que se ajuste a lo que esperamos
        // Modificar el contenido del título
        acercaDeMi.innerText = "Otro";
    } else {
        console.log("La condición no se cumple.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let nombre = "Carlos Arturo";
    let ciudad = "Piura - Peru";
    let saludo = "Bienvenidos";

    let parrafo = document.querySelector('#acerca p'); // Modificamos el selector para obtener el párrafo dentro de la sección "Acerca de Mí"

    function cambiarTexto(nombre, ciudad, saludo) {
        let contenido = `¡${saludo}! Soy ${nombre} , 24 años de ${ciudad} .`;
        return contenido;
    }

    parrafo.innerText = cambiarTexto(nombre, ciudad, saludo);
});
