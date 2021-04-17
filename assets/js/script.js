const API = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

const getData = (API) => {
    return fetch (API)
    .then((responde) => responde.json())
    .then((json) => {
        llenarDatos(json), paginacion(json.info); 
    })
.catch((error) => {
    console.log("Error : ", error)
});
}

const llenarDatos = (data) => {
    let html = "";
    data.results.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width:10rem">';
        html += `<img src="${pj.image}" class="card-img-top">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">${pj.species}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    document.getElementById("datosPersonajes").innerHTML = html;
    }

getData (API);