var currentOffset = 0;

window.onload = function() {
    console.log("Loading site...");
    
    const searchInput = document.getElementById('searchPokemonInput');
    searchInput.addEventListener('input', searchPokemon);

    const orderBySelect = document.getElementById('orderBySelect');
    orderBySelect.addEventListener('change', function () {
        const selectedOption = orderBySelect.value;
        orderBy(selectedOption);
    });

    fetchPokemon();

};

async function fetchPokemon() {
    let pokemonList = document.getElementById("pokemonList");
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset='+currentOffset;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const pokemonArray = data.results;

        for (let pokemon of pokemonArray) {
            const pokemonData = await fetch(pokemon.url);
            const pokemonDetails = await pokemonData.json();

            displayPokemon(pokemonDetails);
        }
        currentOffset += 20;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
}

function displayPokemon(pokemon) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.setAttribute("onclick", "goToPokemonInfo("+pokemon.id+")")

    const ceroString = (pokemon.id > 100) ? "" : ((pokemon.id > 10) ? "0" : "00");

    pokemonElement.innerHTML = `
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}" loading="lazy">
        <span>#${ceroString}${pokemon.id}</span>
        <p>${pokemon.name}</p>
    `;
    pokemon.types.forEach(typeObj => {
        pokemonElement.innerHTML += `<button class='pokemonTypeButton ${typeObj.type.name}'>${typeObj.type.name}</button>`;
    })

    pokemonList.appendChild(pokemonElement);
}

function loadPokemon() {
    fetchPokemon();
}

function randomPokemonList() {
    currentOffset = Math.floor(Math.random() * 1000);
    clearPokemonList();
    fetchPokemon();
}

function clearPokemonList() {
    let pokemonList = document.getElementById("pokemonList");
    pokemonList.innerHTML = "";
}

function searchPokemon() {
    const searchText = document.getElementById("searchPokemonInput").value.toLowerCase();

    const pokemons = document.getElementsByClassName("pokemon");
    for (let pokemon of pokemons) {
        pokemon.style.display = "block";

        const paragraphs = pokemon.getElementsByTagName("p");
        for (let p of paragraphs) {
            if (!p.textContent.includes(searchText)) {
                pokemon.style.display = "none";
            }
        }
    }

}

function orderBy(orderValue) {
    if (orderValue === "none") return;

    const pokemonList = document.getElementById("pokemonList");

    const children = Array.from(pokemonList.getElementsByClassName('pokemon'));

    // sorts pokemon list according to order value
    children.sort((a, b) => {
        // get pokemon names
        const textA = (orderValue === "AZ" || orderValue === "ZA") ? a.querySelector('p').textContent : a.querySelector('span').textContent;
        const textB = (orderValue === "AZ" || orderValue === "ZA") ? b.querySelector('p').textContent : b.querySelector('span').textContent;
        
        // get pokemon numbers
        const valueA = parseInt(textA.slice(1));
        const valueB = parseInt(textB.slice(1));
        
        // if order by AZ or ZA is selecte we return sorted list
        if (orderValue === "AZ" || orderValue === "ZA") {
            return (orderValue === "AZ") ? textA.localeCompare(textB) : textB.localeCompare(textA);
        }
        
        // if order by lowest or highest number is select we return sorted list
        return (orderValue === "lowestNumber") ? valueA - valueB : valueB - valueA;
    });

    children.forEach(child => {
        pokemonList.appendChild(child);
    });
}

function goToPokemonInfo(value) {
    window.location.href = "/pokedexChallenge/pokemon-info/?id="+value;
}