
const MAX_ID = 493

export const GetRandomPokemonByID = () => {
    const PokemonID = Math.floor(Math.random() * (MAX_ID - 1))
    fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonID}`)
        .then((response) => response.json())
    return response
  }