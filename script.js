/* CLOCK */

const clock_div = document.getElementById('clock');
function clock () {
    let d = new Date()
    let time = d.toLocaleTimeString();
    clock_div.innerHTML = time;
}
setInterval(clock, 1000);

/* POKEDEX */
let poke_list = document.getElementById("poke_list");
let poke_data = document.getElementById("poke_data");

fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then(pokemon => {
    print_pkmn(pokemon);
});

function print_pkmn (pokemon) {
    //console.log("data", pokemon);

    pokemon.results.map((pokemon) => {
        //console.log("a pokemon", pokemon);

        let li = document.createElement("li");
        li.innerText = pokemon.name;

        poke_list.appendChild(li);


    });
}


