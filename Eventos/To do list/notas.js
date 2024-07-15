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
        notaDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${nota.titulo}</h5>
                    <p class="card-text">${nota.texto}</p>
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
    idGlobal++;
    const nuevaNota = { id: idGlobal, titulo: titulo, texto: texto, realizada: false };
    notas.push(nuevaNota);
    pintarNotas(notas);
}

// Función para borrar una nota
function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas(notas);
}

// Función para marcar una nota como realizada o no realizada
function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas(notas);
    }
}

// Función para filtrar notas por estado de realización
function filtrarPorRealizadas(notas) {
    return notas.filter(nota => nota.realizada);
}

// Función para filtrar notas por texto
function filtrarPorTexto(notas, texto) {
    if (!texto) return notas;
    return notas.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto));
}

// Evento al hacer click en el botón de guardar nota
document.getElementById('guardarNota').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    if (titulo && texto) {
        agregarNota(titulo, texto);
        document.getElementById('titulo').value = '';
        document.getElementById('texto').value = '';
    }
});

// Evento al hacer click en el botón de limpiar campos
document.getElementById('limpiarCampos').addEventListener('click', () => {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
});

// Evento para filtrar notas por texto
document.getElementById('filtroTexto').addEventListener('input', (e) => {
    const texto = e.target.value;
    const notasFiltradas = filtrarPorTexto(notas, texto);
    const notasParaMostrar = document.getElementById('filtroRealizadas').checked ? filtrarPorRealizadas(notasFiltradas) : notasFiltradas;
    pintarNotas(notasParaMostrar);
});

// Evento para filtrar notas por estado de realización
document.getElementById('filtroRealizadas').addEventListener('change', (e) => {
    const texto = document.getElementById('filtroTexto').value;
    const notasFiltradas = filtrarPorTexto(notas, texto);
    const notasParaMostrar = e.target.checked ? filtrarPorRealizadas(notasFiltradas) : notasFiltradas;
    pintarNotas(notasParaMostrar);
});

// Pintamos las notas inicialmente
pintarNotas(notas);
