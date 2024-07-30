

const url = new URLSearchParams(window.location.search);
const id = url.get('id');
const url2 = `https://api-colombia.com/api/v1/Department/${id}`;

 const fetchData = async () =>{
    let response = await fetch(url2)
    let data = await response.json();
    return data
}  


const createDetail = async() =>{
    const data = await fetchData()
    const card = document.createElement('div');
    card.innerHTML =`<div class="row">
                <div class="col-12">
                    <h2>${data.name}</h2>
                    <p>${data.description}</p>
                    <p>Población: ${data.population}</p>
                    <p>Superficie: ${data.surface} km²</p>
                    <img src="https://media.istockphoto.com/id/1453256961/es/foto/vista-a%C3%A9rea-del-paisaje-urbano-moderno-de-bogot%C3%A1-en-colombia-por-la-tarde.jpg?s=612x612&w=0&k=20&c=qYSb6v0CH9MDDePZJZdlD0qT850vGDCzS3KlJsLiVVE=" alt="Casanare" >
                </div>
            </div>`
    const contenedor = document.getElementById('contenedor');
    console.log(contenedor)
    contenedor.appendChild(card);
    




}
createDetail()


//trae las ciudades

const url3 = `https://api-colombia.com/api/v1/Department/${id}/cities`;

const fetchCyties = async () =>{
    let response = await fetch(url3)
    let data = await response.json();
    return data
}


const createCardsDetails = async() =>{
    const data = await fetchCyties()
    const contenedor = document.getElementById('content-cards2');
    contenedor.innerHTML = "";
    
    data.forEach(d => {
      

       
        const card = `<div class="card mt-4" style="width: 18rem;">
                            <img src="https://seeklogo.com/images/E/Escudo_de_Colombia-logo-3544F5549B-seeklogo.com.png" class="card-img-top" alt="Imagen_ciudad">
                            <div class="card-body">
                              <h5 class="card-title name">${d.name}</h5>
                              <p class="card-text">${d.description}.</p>
                              <p class="card-text">Poblacion: ${d.population}</p>
                            </div>
                          </div>`
    
        contenedor.innerHTML += card;
    });
        
}


document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('btnCitys');
    btn.addEventListener('click', createCardsDetails)
})



const url4 = `https://api-colombia.com/api/v1/Department/${id}/naturalareas`;

const fetchNaturalAreas = async () =>{
    let response = await fetch(url4)
    let data = await response.json();
    console.log("areas naturales",data)
    return data
}




document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('btnNatural');
    btn.addEventListener('click', createCardsDetails2)
})
const createCardsDetails2 = async() =>{
    const data = await fetchNaturalAreas()
    const contenedor = document.getElementById('content-cards2');
    contenedor.innerHTML = "";
    
    data.forEach(d => {
        console.log(d)
        
        const card = `<div  class="card mt-4" style="width: 18rem;">
                            <img src="https://seeklogo.com/images/E/Escudo_de_Colombia-logo-3544F5549B-seeklogo.com.png" class="card-img-top" alt="Imagen_ciudad">
                            <div class="card-body">
                              <h5 class="card-title name">${d.name}</h5>
                              <p class="card-text">${d.description}.</p>
                              <p class="card-text">Poblacion: ${d.population}</p>
                            </div>
                          </div>`
    
        contenedor.innerHTML += card
    });
        
}



const createAllsCards = async() =>{
    const data = await fetchCyties()
    const data2 = await fetchNaturalAreas()
    const allInfo = data.concat(data2)
    console.log(allInfo)
    const contenedor = document.getElementById('content-cards2');
    contenedor.innerHTML = "";
    
    allInfo.forEach(d => {
        const cardHTML = `
            <div class="card mt-4" style="width: 18rem;">
                <img src="https://seeklogo.com/images/E/Escudo_de_Colombia-logo-3544F5549B-seeklogo.com.png" class="card-img-top" alt="Imagen_ciudad">
                <div class="card-body">
                    <h5 class="card-title name">${d.name}</h5>
                    <p class="card-text">${d.description}.</p>
                    <p class="card-text">Población: ${d.population}</p>
                </div>
            </div>
        `;
    
        contenedor.innerHTML += cardHTML;
    });
    
        
}

createAllsCards()

document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('btnAll');
    btn.addEventListener('click', createAllsCards)
})

const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('search');
    search.addEventListener('keyup', () => {
        const searchValue = normalizeText(search.value.toLowerCase());
        const nombres = Array.from(document.getElementsByClassName('name'));
        
        nombres.forEach(nombre => {
            const card = nombre.closest('.card'); 
            const cardText = normalizeText(nombre.textContent.toLowerCase());
            if (cardText.includes(searchValue)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';
            }
        });
    });
});


