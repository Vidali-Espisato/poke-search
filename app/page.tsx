import Pokemons from "@/components/pokemons";
import { fetchPokemons } from "@/lib/apis";


export default async function Home() {
  const pokemons = await fetchPokemons()

  return (
    <div>
      <Pokemons pokemons={ pokemons } />
    </div>
  )
}
