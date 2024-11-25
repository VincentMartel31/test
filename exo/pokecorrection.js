

let divPokemonUI = document.querySelector("#superPokemonList");

const fetchPokemonGen9 = async () => {
    try {
        const response = await fetch("https://tyradex.vercel.app/api/v1/gen/1");
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        console.log(data);
        

        // Générer des cartes pour chaque Pokémon
        data.forEach(pokemon => {
            const cartePokemon = document.createElement('div');
            cartePokemon.classList.add('card','m-3', 'p-3','bg-light');
            cartePokemon.style.width = '18rem';
            cartePokemon.innerHTML = DOMPurify.sanitize(`
              <img src="${pokemon.sprites.regular}" class="card-img-top" alt="${pokemon.name.fr}">
              <div class="card-body">
                <h5 class="card-title">${pokemon.name.fr}</h5>
                <p class="card-text">Type: ${pokemon.types.map(type => type.name).join(', ')}</p>
                <p class="card-text">Poids: ${pokemon.weight}</p>
                <p class="card-text">Taille: ${pokemon.height}</p>
                <a href="#" class="btn btn-primary">Voir plus</a>
            </div>`);
            divPokemonUI.appendChild(cartePokemon);
            // Ajouter la carte au conteneur
        });
    } catch (error) {
        console.error('Erreur:', error);
    }
}

fetchPokemonGen9();