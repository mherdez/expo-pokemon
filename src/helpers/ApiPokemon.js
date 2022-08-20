
const URL = 'https://pokeapi.co/api/v2/pokemon';

const randomPokemon = () => {
  return Math.floor(Math.random() * 649 + 1)
}

export const getPokemon = async () => {
	const result = await fetch(`${URL}/${randomPokemon()}`);
	const data   = await result.json()
	const { name, sprites } = await data;
	const { front_default: image} = await sprites.other.dream_world;
	return {
		name,
		image
	}
}

export const initPokemon = {
  name: '',
  image: ''
}