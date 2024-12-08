const weaknesses = [
    { type: "grass", weaknesses: ["fire", "flying", "ice"] },
    { type: "poison", weaknesses: ["psychic"] },
    { type: "normal", weaknesses: ["fighting"] },
    { type: "fighting", weaknesses: ["fairy","flying","psychic"] },
    { type: "flying", weaknesses: ["electric","ice","rock"] },
    { type: "ground", weaknesses: ["grass","water","ice"] },
    { type: "rock", weaknesses: ["fighting","grass","ground","steel","water"] },
    { type: "bug", weaknesses: ["fire","flying","rock"] },
    { type: "ghost", weaknesses: ["dark","ghost"] },
    { type: "steel", weaknesses: ["fighting","fire","ground"] },
    { type: "fire", weaknesses: ["ground","rock","water"] },
    { type: "water", weaknesses: ["electric","grass"] },
    { type: "electric", weaknesses: ["ground"] },
    { type: "psychic", weaknesses: ["bug","dark","ghost"] },
    { type: "ice", weaknesses: ["fighting","fire","rock","steel"] },
    { type: "dragon", weaknesses: ["dragon","fairy","ice"] },
    { type: "dark", weaknesses: ["bug","fairy","fighting"] },
    { type: "fairy", weaknesses: ["poison","steel"] }
];

window.onload = function() {
    console.log("Loading pokemon info site...");

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetchPokemonInfo(id);
};

async function fetchPokemonInfo(id) {
    const info = document.getElementById("pokemonInfoTittle");
    const leftContent = document.getElementById("pokemonContentLeft");
    const rightContent = document.getElementById("pokemonContentRight");
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'+id;
    const apiUrl2 = 'https://pokeapi.co/api/v2/pokemon-species/'+id;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const pokemon = data;
        const response2 = await fetch(apiUrl2);
        const data2 = await response2.json();
        const pokemonSpecies = data2;

        const ceroString = (pokemon.id > 100) ? "" : ((pokemon.id > 10) ? "0" : "00");
        // Capitalice pokemon name to have first character upper case
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase();
        const flavorText = (pokemonSpecies.flavor_text_entries.length > 9) ? pokemonSpecies.flavor_text_entries[9].flavor_text : pokemonSpecies.flavor_text_entries[0].flavor_text;
        const statsTable = getStatsTable(pokemon.stats);

        info.innerHTML = `
            <span class="pokemonInfoName">${name}</span>
            <span class="pokemonInfoId">#${ceroString}${pokemon.id}</span>
        `;

        leftContent.innerHTML = `
            <img class="pokemonInfoImage" src="${pokemon.sprites.other["official-artwork"].front_default}" width="97%" alt="${pokemon.name}" loading="lazy" />
            <div class="statsContainer">
                <span>Stats</span>
                <div id="statsTable">${statsTable}<div>                
            </div>
        `;
        invertStatsTable();
        rightContent.innerHTML = `
            <div>${flavorText}</div>
            <div class="versionsContainer">
                <span>Versions:</span>
                <button class="pokeballButton pokeballBlue"></button>
                <button class="pokeballButton pokeballPink"></button>
            </div>
            <div class="pokemonAttributesContainer">
                <div class="pokemonAttrElement">
                    <span>Height</span>
                    <br/>
                    <span class="pokemonAttrData">${parseFloat(pokemon.height)/10} m</span>
                </div>
                <div class="pokemonAttrElement">
                    <span>Weight</span>
                    <br/>
                    <span class="pokemonAttrData">${parseFloat(pokemon.weight)/10} kg</span>
                </div>
                <div class="pokemonAttrElement">
                    <span>Abilities</span>
                    <br/>
                    <span class="pokemonAttrData">${pokemon.abilities[0].ability.name}</span>
                </div>
                <div class="pokemonAttrElement">
                    <span>Gender</span>
                    <br/>
                    <span class="pokemonAttrData"><i class="fas fa-mars"></i> <i class="fas fa-venus"></i></span>
                </div>
            </div>
            <div>
                <div>
                    <p>Type</p>
                    <span class='pokemonTypeSpan ${pokemon.types[0].type.name}'>${pokemon.types[0].type.name}</span>` +
                    
                    ((pokemon.types[1] !== null && pokemon.types[1] !== undefined) ? `<span class='pokemonTypeSpan ${pokemon.types[1].type.name}'>${pokemon.types[1].type.name}</span>` : "")

                + `</div>
            </div>
            <div>
                <div>
                    <p>Weaknesses</p>` +
                    getWeaknessesHtml(pokemon.types)
                + `</div>
            </div>
        `;
        
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
    
}

function invertStatsTable(){
    const tbody = document.querySelector('#statsTable tbody');
    const rows = Array.from(tbody.rows).reverse();
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

function getStatsTable(stats) {

    let hp = parseInt(stats[0].base_stat);
    let attack = parseInt(stats[1].base_stat);
    let defense = parseInt(stats[2].base_stat);
    let spAttack = parseInt(stats[3].base_stat);
    let spDefense = parseInt(stats[4].base_stat);
    let speed = parseInt(stats[5].base_stat);

    let tableContent = "";
    for (let i = 0; i < 15; i++) {
        tableContent += `
            <tr>
                <td class="${(hp > 0) ? 'blueCell' : ''}"></td>
                <td class="${(attack > 0) ? 'blueCell' : ''}"></td>
                <td class="${(defense > 0) ? 'blueCell' : ''}"></td>
                <td class="${(spAttack > 0) ? 'blueCell' : ''}"></td>
                <td class="${(spDefense > 0) ? 'blueCell' : ''}"></td>
                <td class="${(speed > 0) ? 'blueCell' : ''}"></td>
            </tr>
        `;
        hp -= 15;
        attack -= 15;
        defense -= 15;
        spAttack -= 15;
        spDefense -= 15;
        speed -= 15;
    }

    return `
        <table class="statsTable">
    <tfoot>
      <tr>
        <th>HP</th>
        <th>Attack</th>
        <th>Defense</th>
        <th>SP. Att</th>
        <th>SP. Def</th>
        <th>Speed</th>
      </tr>
    </tfoot>
    <tbody>` +
        tableContent
    +`</tbody>
  </table>
    `;
}

function getWeaknessesHtml(types) {
    let res = "";
    types.forEach(type => {
        const weaknesses = getWeaknesses(type.type.name);
        weaknesses?.forEach(weakness => {
            res += `<span class='pokemonTypeSpan ${weakness}'>${weakness}</span>`;
        });
    })
    return res;
}

function getWeaknesses(type) {
    return weaknesses.filter(x => x.type === type)[0]?.weaknesses;
}