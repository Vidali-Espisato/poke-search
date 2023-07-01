import PokemonDetails from "@/components/pokemonDetails"
import PokemonImage from "@/components/pokemonImage"
import PokemonStats from "@/components/pokemonStats"
import { getPokemon } from "@/lib/apis"


export default async function PokeMon({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params
    const pokemon = await getPokemon(pokemonName)

    return (
        <div className="h-screen w-5/6 sm:w-1/2 mx-auto">
            <PokemonImage imageUrl={ pokemon.sprites?.other?.["official-artwork"]?.front_default } pokemonName={ pokemonName } />
            <PokemonDetails name={ pokemonName } weight={ pokemon.weight } typeData={ pokemon.types }/>
            <PokemonStats stats={ pokemon.stats } />
        </div>
    )
}