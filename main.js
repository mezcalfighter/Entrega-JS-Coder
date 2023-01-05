class Pokemon{
    constructor(id,name,sprites,height,weight,type){
        this.id = id;
        this.name = name;
        this.sprites = sprites
        this.height = height
        this.weight = weight
        this.type = type
    }
}

let pokemon = new Pokemon()
const nameScreen = document.getElementById("name-screen");
const mainScreen = document.getElementById("main-screen");
const aboutScreen = document.getElementById("about-screen");
const idScreen = document.getElementById("id-screen");
const typeScreen = document.getElementById("type-screen");

// Find
const submitSearch = document.getElementById("search-btn");
submitSearch.addEventListener("click",(e) => {
    e.preventDefault();
    GetPokemon()
});

const submitInput = document.getElementById("name-input")
submitInput.addEventListener("keypress",(e) => {
    e.preventDefault();
    e.key == "Enter" ? GetPokemon() : submitInput.value += e.key
});


if(localStorage.key("pokemonStorage")){
    let pokemonJSON = localStorage.getItem("pokemonStorage");
    let pokemon = JSON.parse(pokemonJSON);
    InsertPokemon(pokemon);
}

function InsertPokemon(pokemon){
    nameScreen.innerText = `${pokemon.name}`;
    aboutScreen.innerText = `Height: ${pokemon.height * 10}cm Weight: ${pokemon.weight / 10}kg`
    idScreen.innerText = `# ${pokemon.id}`
    typeScreen.innerText = `${pokemon.type}`
    mainScreen.style.backgroundImage = `url(${pokemon.sprites})`;
}

function GetPokemon(){
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
            pokemon.height = data.height
            pokemon.weight = data.weight
            pokemon.type = data.types[0].type.name
            console.log(pokemon)
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
            aboutScreen.innerText = `Height: N/A  Weight: N/A`
            idScreen.innerText = `# N/A`
            typeScreen.innerText = `N/A`
            mainScreen.style.removeProperty("background-image");
            localStorage.clear();
        })
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