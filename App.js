import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './src/themes/stylesTheme';

import { Title, ViewPokemon, ClickmeButton } from './src/components';
import { LogBoxMesagge, getPokemon, initPokemon, handleClick } from './src/helpers';

LogBoxMesagge();

export default function App() {

const [pokemon, setPokemon] = useState(initPokemon);
const [isVisible, setIsVisible] = useState(false)
const [isClickVisible, setIsClickVisible] = useState(true);

useEffect(() => {
  getPokemon().then(
    pokemon => setPokemon(pokemon)
  )
}, []);

  return (
  <View style={styles.wrap}>

    <Title />

    <ViewPokemon
      pokemon={pokemon}
      isVisible={isVisible} />

    <ClickmeButton
      isClickVisible={isClickVisible}
      handleClick={ () => handleClick( setIsVisible, setIsClickVisible, setPokemon ) }
    />

  </View>
  );
};

