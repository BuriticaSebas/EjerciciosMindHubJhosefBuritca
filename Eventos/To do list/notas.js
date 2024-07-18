// Array donde se guardan las notas
let notas = [
    { id: 1, titulo: 'Nota 1', texto: 'Texto de la nota 1', realizada: false },
    { id: 2, titulo: 'Nota 2', texto: 'Texto de la nota 2', realizada: true }
];




// Inicializamos el idGlobal con el último id creado manualmente
let idGlobal = 2;

// Función para pintar las notas en el contenedor
function pintarNotas(notas) {
    const contenedor = document.getElementById('contenedorNotas');
    contenedor.innerHTML = '';

    if (notas.length === 0) {
        contenedor.innerHTML = '<p class="text-center">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notas.forEach(nota => {
        const notaDiv = document.createElement('div');
        notaDiv.className = 'col-4 mb-3';
        
        // Aplicar estilo de tachado si la nota está realizada
        const estiloTachado = nota.realizada ? 'text-decoration: line-through;' : '';

        notaDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${nota.titulo}</h5>
                    <p style="${estiloTachado}" class="card-text">${nota.texto}</p>
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}> Realizada
                    <button class="btn btn-danger btn-sm float-end" onClick="borrarNota(${nota.id})">Borrar Nota</button>
                </div>
            </div>
        `;
        
        contenedor.appendChild(notaDiv);
    });
}



// Función para agregar una nota
function agregarNota(titulo, texto) {
    // Se aumenta el id global para que cada nueva nota tenga un id diferente.
    idGlobal++;
    // Se crea una nueva nota con el id global, el título y el texto se toman como parametros que seran recibidos de lo que ingrese el usuario, y se marca como no realizada.
    const nuevaNota = { id: idGlobal, titulo: titulo, texto: texto, realizada: false };
    //Se agrega la nueva nota al array de notas. 
    notas.push(nuevaNota);
    // Se llama a la funcion pintarNotas para mostrar la nueva nota creada..
    pintarNotas(notas);
}






// Función para borrar una nota
function borrarNota(id) {
    /*Se crea una nueva variable que almacenara el nuevo array despues de aplicar el metodo filter
     nota => nota.id !== id es la función de prueba. Para cada nota en el arreglo notas, esta función verifica si nota.id es diferente de id, si es true la ingresa al nuevo array de notas si es false la saca del array.
     */
    notas = notas.filter(nota => nota.id !== id);
    // Se llama a la función pintarNotas para mostrar las notas actualizadas.
    pintarNotas(notas);
}





// Función para marcar una nota como realizada o no realizada
function marcarRealizada(id) {
    // Se busca la nota en el array de notas con el id dado. Si la encuentra, se cambia el estado de realización y se llama a la función pintarNotas para mostrar la actualización.
    const nota = notas.find(nota => nota.id === id);
    // si nota no es undefined.entonces ejecuta este codigo que cambia el estado de realización
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas(notas);
    }
}





// Función para filtrar notas por estado de realización
function filtrarPorRealizadas(notas) {
    // Aca retorna las notas que esten en valor true
    return notas.filter(nota => nota.realizada);
}





// Función para filtrar notas por texto

function filtrarPorTexto(notas, texto) {

    //Esta línea comprueba si texto es falsy (como null, undefined, '', 0, etc.). Si texto es falsy, la función devuelve el arreglo notas original sin aplicar ningún filtro, porque no hay texto para filtrar.
    if (!texto) return notas;

    //Esta linea devuelve la similitud que encuentre include ten el titulo y texto de las notas creadas con respecto a lo que yo escriba en el campo de texto de filtra por texto que es el argumento que se le pasa a la funcion. 
    return notas.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto));
}





// Evento al hacer click en el botón de guardar nota
document.getElementById('guardarNota').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    if (titulo && texto) {
        agregarNota(titulo, texto);

        //Aca lo que hace es que al llamar la funcion de agregar nota inmediatamente limpia los campos de titulo y texto.
        document.getElementById('titulo').value = '';
        document.getElementById('texto').value = '';
    }
});



// Evento al hacer click en el botón de limpiar campos
document.getElementById('limpiarCampos').addEventListener('click', () => {
    //Aca lo que hace es que al pisar el boton limpiar campos inmediatamente se escucha el evento y nos elimina lo que hayamos escrito en estos campos
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
});




// Evento para filtrar notas por texto
document.getElementById('filtroTexto').addEventListener('input', (e) => {
    // 1. Obtenemos el texto ingresado en el campo de texto de filtra por texto
    const texto = e.target.value;
    // 2. Se filtran las notas por el texto ingresado y se almacenan en notasFiltradas
    const notasFiltradas = filtrarPorTexto(notas, texto);
    // 3. Se verifica si la casilla de verificación de "Mostrar solo realizadas" está marcada
    // 4. Si está marcada, se filtran las notasFiltradas por las notas realizadas y se almacenan en notasParaMostrar
    // 5. Si no está marcada, se utiliza las notasFiltradas directamente como notasParaMostrar
    const notasParaMostrar = document.getElementById('filtroRealizadas').checked ? filtrarPorRealizadas(notasFiltradas) : notasFiltradas;
    // 6. Se llama a la función pintarNotas para mostrar las notas filtradas o no filtradas según el caso
    pintarNotas(notasParaMostrar);
});




// Evento para filtrar notas por estado de realización
document.getElementById('filtroRealizadas').addEventListener('change', (e) => {
    // 1. Obtenemos el texto ingresado en el campo de texto de filtra por texto
    const texto = document.getElementById('filtroTexto').value;
    // 2. Se filtran las notas por el texto ingresado y se almacenan en notasFiltradas
    const notasFiltradas = filtrarPorTexto(notas, texto);
    // 3. Se verifica si la casilla de verificación de "Mostrar solo realizadas" está marcada
    // 4. Si está marcada, se filtran las notasFiltradas por las notas realizadas y se almacenan en notasParaMostrar
    // 5. Si no está marcada, se utiliza las notasFiltradas directamente como notasParaMostrar
    const notasParaMostrar = e.target.checked ? filtrarPorRealizadas(notasFiltradas) : notasFiltradas;
    // 6. Se llama a la función pintarNotas para mostrar las notas filtradas o no filtradas según el caso
    pintarNotas(notasParaMostrar);
});


// Pintamos las notas inicialmente
pintarNotas(notas);

