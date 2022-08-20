import { getPokemon } from "./ApiPokemon"

export const handleClick = ( setIsVisible, setIsClickVisible, setPokemon ) => {
  setIsVisible( true )
  setIsClickVisible( false )
  setTimeout( () => {
    setIsVisible(false)
    setIsClickVisible( true )
    getPokemon().then(pokemon => setPokemon(pokemon))
  },1800)
}