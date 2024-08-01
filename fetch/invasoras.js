const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('search');
    search.addEventListener('keyup', () => {
        const searchValue = normalizeText(search.value.toLowerCase());
        filterTable(searchValue);
    });

    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://api-colombia.com/api/v1/InvasiveSpecie');
        const data = await response.json();
        generateTable(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function generateTable(data) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Clear any previous table

    const table = document.createElement('table');
    table.className = 'table table-striped table-hover';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    tbody.id = 'table-body'; // Set an id for the tbody

    // Crear cabecera de la tabla
    const headerRow = document.createElement('tr');
    const headers = ['Nombre', 'Nombre Científico', 'Impacto', 'Manejo', 'Nivel de Riesgo', 'Imagen'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Crear filas de la tabla
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="name">${item.name}</td>
            <td>${item.scientificName || 'N/A'}</td>
            <td>${item.impact || 'N/A'}</td>
            <td>${item.manage || 'N/A'}</td>
            <td>${item.riskLevel || 'N/A'}</td>
            <td>
                <img src="${item.urlImage}" alt="${item.name}" class="img-thumbnail" style="width: 50px; height: 50px;">
            </td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

function filterTable(searchValue) {
    const rows = document.querySelectorAll('tbody tr');
    let noMatches = true;

    rows.forEach(row => {
        const nameCell = row.querySelector('.name');
        const nameText = normalizeText(nameCell.textContent.toLowerCase());
        if (nameText.includes(searchValue)) {
            row.style.display = '';
            noMatches = false;
        } else {
            row.style.display = 'none';
        }
    });

    const tableBody = document.getElementById('table-body');
    if (noMatches) {
        const noResultsRow = document.createElement('tr');
        noResultsRow.className = 'no-results';
        noResultsRow.innerHTML = `
            <td colspan="6" class="text-center">No se encontraron resultados. Por favor intenta con otra búsqueda.</td>
        `;
        tableBody.appendChild(noResultsRow);
    } else {
        const noResultsRow = document.querySelector('.no-results');
        if (noResultsRow) {
            noResultsRow.remove();
        }
    }
}
