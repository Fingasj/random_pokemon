import { useEffect, useState } from "react"

import 'tailwindcss/tailwind.css'

const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

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
    <div className="w-screen h-screen flex flex-col justify-center text-center" >
      <h1 className="text-3xl font-bold underline"> Here is your Pokemon </h1>
      <div className="flex flex-col items-center">
        <img width="256" height="256" layout="fixed" className="animate-fade-in" src={Pokemon.sprites?.front_default} />
        <div className="text-2xl font-bold capitalize">
          <div>Name: {Pokemon.name}</div>
          <div>Weight: {Pokemon.weight}</div>
        </div>
      </div>
      <br />
      <form>
        <button className={btn} onSubmit={GetRandomPokemonByID}>Get New Pokemon</button>
      </form>
    </div>
  )
}
