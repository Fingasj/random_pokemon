import { useEffect, useState } from "react"

export default function Home() {  
  const [Pokemon, SetPokemon] = useState([])
  const MAX_ID = 493

  useEffect(() => {
    SetPokemon(GetRandomPokemonByID())
  }, [])

  const GetRandomPokemonByID = () => {
    const PokemonID = Math.floor(Math.random() * (MAX_ID - 1))
    return (
      fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonID}`)
        .then((response) => response.json())
        .then((selectedPokemon) => (SetPokemon(selectedPokemon)))
    )
  }

  return (
    <div className='pokemon-container'>
      <h1> Here is your Pokemon </h1>
      <div><img src={Pokemon.sprites?.front_default} /></div>
      <div>{Pokemon.name}</div>
      <div>{Pokemon.weight}</div>
      <br/>
      <form>
        <button onSubmit={GetRandomPokemonByID}>Get New Pokemon</button>
      </form>
    </div>
  )
}
