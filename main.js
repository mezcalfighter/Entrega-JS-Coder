class Pokemon{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}

let bulbasaur = new Pokemon(1,"Bulbasaur");
let charmander = new Pokemon(2,"Charmander");
let squirtle = new Pokemon(3,"Squirtle");

let pokemones = [bulbasaur, charmander, squirtle, bulbasaur];

// Find
const submitSearch = document.getElementById("search-btn");
submitSearch.addEventListener("click",(e) => {
    e.preventDefault();
    const elementHTML = document.getElementById("name-input").value;
    const lookFor = pokemones.find(element => element.name == elementHTML);
    if(lookFor){
        alert(`${lookFor.name} si existe`);
    }else{
        alert(`${elementHTML} no existe`);
    }
});

// Filter
const submitFilter = document.getElementById("search-btn2");
submitFilter.addEventListener("click",(e) => {
    e.preventDefault();
    const elementHTML = document.getElementById("name-input-filter").value;
    const lookFor = pokemones.find(element => element.name == elementHTML);
    console.log(lookFor);
});