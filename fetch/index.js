const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('search');
    const orderSelect = document.getElementById('order');

    search.addEventListener('keyup', () => {
        applyFilters();
    });

    orderSelect.addEventListener('change', () => {
        applyFilters();
    });

    fetchDepartamentos();
});

let departamentosData = [];

async function fetchDepartamentos() {
    try {
        const response = await fetch('https://api-colombia.com/api/v1/Department');
        const data = await response.json();

        departamentosData = data;
        applyFilters();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function applyFilters() {
    const searchValue = normalizeText(document.getElementById('search').value);
    const orderValue = document.getElementById('order').value;

    let filteredData = departamentosData.filter(department =>
        normalizeText(department.name).includes(searchValue)
    );

    if (orderValue === 'asc') {
        filteredData.sort((a, b) => a.population - b.population);
    } else if (orderValue === 'desc') {
        filteredData.sort((a, b) => b.population - a.population);
    }

    renderCards(filteredData);
}

function renderCards(data) {
    const contenedor = document.getElementById('content-cards');
    contenedor.innerHTML = '';

    data.forEach(department => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4 department-card';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title name">${department.name}</h5>
                    <p class="card-text">${department.description}</p>
                    <p class="card-text">Población: ${department.population}</p>
                    <a href="/detalles.html?id=${department.id}" class="btn btn-primary">Detalles</a>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
