class Pokemon{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}

let bulbasaur = new Pokemon(1,"Bulbasaur");
let charmander = new Pokemon(4,"Charmander");
let squirtle = new Pokemon(7,"Squirtle");

let pokemones = [bulbasaur, charmander, squirtle, bulbasaur];

if(localStorage.key("lookFor")){
    let lookForJSON = localStorage.getItem("lookFor");
    let lookFor = JSON.parse(lookForJSON);
    const nameScreen = document.getElementById("name-screen");
    const mainScreen = document.getElementById("main-screen");
    nameScreen.innerText = `${lookFor.name}`;
    mainScreen.style.backgroundImage = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${lookFor.id}.png)`;
}

// Find
const submitSearch = document.getElementById("search-btn");
submitSearch.addEventListener("click",(e) => {
    e.preventDefault();
    const elementHTML = document.getElementById("name-input").value;
    const lookFor = pokemones.find(element => element.name == elementHTML);
    const nameScreen = document.getElementById("name-screen");
    const mainScreen = document.getElementById("main-screen");
    if(lookFor){
        localStorage.setItem("lookFor",JSON.stringify(lookFor));
        nameScreen.innerText = `${lookFor.name}`;
        mainScreen.style.backgroundImage = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${lookFor.id}.png)`;
    }else{
        nameScreen.innerText = "NOT FOUND"
        mainScreen.style.removeProperty("background-image");
        localStorage.clear();
    }
});



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