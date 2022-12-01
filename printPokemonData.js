// Kan importera annan modul

export default function printPokemonData(pokemonUrl) {
    fetch(pokemonUrl)
    .then(res => res.json())
    .then(data => {
        //console.log("pokemon data", data);
        poke_data.innerHTML = "<h3>" + data.name + "</h3>";
        
        data.moves.map(move => {
            //console.log("move", move.move)
            poke_data.insertAdjacentHTML("beforeend", " - " + move.move.name )
        });

        let pokemonImage = document.createElement("img");
        pokemonImage.src = data.sprites.front_default

        poke_data.appendChild(pokemonImage);
    })
}

