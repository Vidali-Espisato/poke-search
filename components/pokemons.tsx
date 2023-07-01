"use client"

import { useState } from "react"
import PokemonPill from "./pokemonPill"
import { Input } from "./ui/input"


interface pokemonsProps {
    pokemons: any[]
}

export default function Pokemons({ pokemons }: pokemonsProps) {
    const [searchText, setSearchText] = useState("")

    const filteredPokemons = pokemons?.filter((pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()))


    return (
        <div className="h-screen w-3/4 sm:w-1/2 mx-auto">
            <Input
                type="text"
                value={searchText}
                id="pokemonName"
                autoComplete="off"
                placeholder="Type your Pokémon name..."
                onChange={e => setSearchText(e.target.value.trim())}
                className="border-4 border-zinc-500 rounded-xl text-lg text-center py-6 font-semibold placeholder:text-zinc-500 placeholder:italic"
            />
            <div className="my-5 grid text-center xl:grid-cols-3 lg:grid-cols-2 gap-x-10 gap-y-4 h-4/5 overflow-y-scroll no-scrollbar">
                {
                    filteredPokemons?.map((pokemon: any, idx: any) => (
                        <PokemonPill name={ pokemon.name } key={ idx } />
                    ))
                }
            </div>
        </div>
    )
}