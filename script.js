/* CLOCK */

const clock_div = document.getElementById('clock');
function clock () {
    let d = new Date()
    let time = d.toLocaleTimeString();
    clock_div.innerHTML = time;
}
setInterval(clock, 1000);

/* POKEDEX */
import printPokemonData from "./printPokemonData.js";

let poke_list = document.getElementById("poke_list");
let poke_data = document.getElementById("poke_data");
let nextButton = document.getElementById("nextButton");

const queryString = window.location.search;
console.log("qs", queryString);
const urlParams = new URLSearchParams(queryString);
let offset = urlParams.get("offset");

fetch("https://pokeapi.co/api/v2/pokemon/?offset=" + offset)
.then(res => res.json())
.then(pokemon => {
    // callback
    print_pkmn(pokemon);
});

//  callback
function print_pkmn (pokemon) {
    //console.log("data", pokemon);
    offset = Number(offset) + 20;
    nextButton.href = "?offset=" + offset;
    pokemon.results.map((pokemon) => {
        //console.log("a pokemon", pokemon);
        let li = document.createElement("li");
        li.innerText = pokemon.name;
        li.addEventListener('click', () => {
            //My first module function
            printPokemonData(pokemon.url);
        })
        poke_list.appendChild(li);
    });
}


