import PokemonImage from "@/components/pokemonImage"
import { getPokemon } from "@/lib/apis"


export default async function({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params
    const pokemon = await getPokemon(pokemonName)

    return (
        <div className="h-screen w-5/6 sm:w-1/2 mx-auto">
            <PokemonImage imageUrl={ pokemon.sprites?.other?.["official-artwork"]?.front_default } pokemonName={ pokemonName } />
        </div>
    )
}