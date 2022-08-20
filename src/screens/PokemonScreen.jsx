import { View } from 'react-native';

import { styles } from '../themes/stylesTheme'

import { Title, ViewPokemon, ClickmeButton } from '../components';

const PokemonScreen = ({pokemon, isVisible, isClickVisible, handleClick}) => {

  return (
    <View style={styles.wrap}>

    <Title />

    <ViewPokemon
      pokemon={pokemon}
      isVisible={isVisible} />

    <ClickmeButton
      isClickVisible={isClickVisible}
      handleClick={ handleClick }
    />

  </View>
  );
};

export default PokemonScreen;