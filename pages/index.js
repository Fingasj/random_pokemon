import { useEffect, useState } from "react"
import Head from "next/head";
import 'tailwindcss/tailwind.css'

import Button from "../components/button/button.component";
import PokemonCard from "../components/pokemon-card/pokemon-card.component";


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
    <>
      <Head>
        <title>Random Pokemon</title>
      </Head>
      <div className="w-screen h-screen flex flex-col justify-center text-center" >
        <PokemonCard Pokemon={Pokemon} />
        <Button btnHandler={GetRandomPokemonByID} Message={"Select Another Pokemon"} />
      </div>
    </>)
}
