import Head from "next/head"
import { useEffect, useState } from "react"
import PokemonCard from "../components/pokemon-card/pokemon-card.component"
import { GetRandomPokemonByID } from "../utils/GetRandomPokemon"


export default function Battle() {

    const [Pokemon1, SetPokemon1] = useState([])
    const [Pokemon2, SetPokemon2] = useState([])

    useEffect(() => {
        SetPokemon1(GetRandomPokemonByID())
        SetPokemon2(GetRandomPokemonByID)
    }, [])

    return (
        <div>
            <Head>
                <title> Who will win? </title>
            </Head>
            <div>Battle Page</div>
            <div>
                <PokemonCard Pokemon={Pokemon1} />
                <PokemonCard Pokemon={Pokemon2} />
            </div>
        </div>
    )
}