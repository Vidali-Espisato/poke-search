
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

export async function fetchPokemons() {

    const response = await fetch(API_BASE_URL + "?limit=151&offset=0")
    const data = await response.json()
    return data.results
}

export async function getPokemon(pokemonName: string) {

    const response = await fetch(API_BASE_URL + pokemonName)
    const data = await response.json()
    console.log("data", data)
    return data
}