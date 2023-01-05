class Pokemon{
    constructor(id,name,sprites){
        this.id = id;
        this.name = name;
        this.sprites = sprites
    }
}

let pokemon = new Pokemon()

// Find
const submitSearch = document.getElementById("search-btn");
submitSearch.addEventListener("click",(e) => {
    e.preventDefault();
    const elementHTML = document.getElementById("name-input").value;
    let pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${elementHTML.toLowerCase()}`
    const nameScreen = document.getElementById("name-screen");
    const mainScreen = document.getElementById("main-screen");
    fetch(pokemonAPI)
        .then((response)=>response.json())
        .then((data) => {
            pokemon.id = data.id
            pokemon.name = data.name
            pokemon.sprites = data.sprites.front_default
            localStorage.setItem("pokemonStorage",JSON.stringify(pokemon));
            InsertPokemon(pokemon)
        })
        .catch((error) => {
            Swal.fire({
                title: 'Pokemon no encontrado',
                text: `Referencia ${error}`,
                icon: 'error',
                confirmButtonText: 'Acceptar',
                backdrop: "#808080"
            })
            nameScreen.innerText = "NOT FOUND"
            console.log(`Error: ${elementHTML}`)
            mainScreen.style.removeProperty("background-image");
            localStorage.clear();
        })
});


if(localStorage.key("pokemonStorage")){
    let pokemonJSON = localStorage.getItem("pokemonStorage");
    let pokemon = JSON.parse(pokemonJSON);
    InsertPokemon(pokemon);
}

function InsertPokemon(pokemon){
    const nameScreen = document.getElementById("name-screen");
    const mainScreen = document.getElementById("main-screen");
    nameScreen.innerText = `${pokemon.name}`;
    mainScreen.style.backgroundImage = `url(${pokemon.sprites})`;
}

// Filter - REMOVED
// const submitFilter = document.getElementById("search-btn2");
// submitFilter.addEventListener("click",(e) => {
//     e.preventDefault();
//     const elementHTML = document.getElementById("name-input-filter").value;
//     const lookFor = pokemones.find(element => element.name.length >= Number(elementHTML));
//     if(lookFor){
//         alert(`${lookFor.name} tiene más de ${elementHTML} caracteres`);
//     }else{
//         alert(`No hay pokemon de más de ${elementHTML} caracteres`);
//     }
// });