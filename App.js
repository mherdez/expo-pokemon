import { useEffect, useState } from 'react';

import { LogBoxMesagge, getPokemon, initPokemon, handleClick } from './src/helpers';
import PokemonScreen from './src/screens/PokemonScreen';

LogBoxMesagge();

export default function App() {

const [pokemon, setPokemon] = useState(initPokemon);
const [isVisible, setIsVisible] = useState(false)
const [isClickVisible, setIsClickVisible] = useState(true);

const getPokemonAsync = async () => setPokemon( await getPokemon() );

useEffect(() => {
  getPokemonAsync();
}, []);

  return (
    <PokemonScreen
      pokemon={pokemon}
      isVisible={isVisible}
      isClickVisible={isClickVisible}
      handleClick={ () => handleClick( setIsVisible, setIsClickVisible, setPokemon ) }
    />
  );
};

