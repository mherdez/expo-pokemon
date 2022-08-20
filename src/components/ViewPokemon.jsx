import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../themes/stylesTheme'
import SvgUri from 'expo-svg-uri'

export default function ViewPokemon( { pokemon, isVisible }) {
  return (
    <View style={styles.container}>
      { (pokemon.image !== '') &&
        <SvgUri
          width="220"
          height="220"
          source={{
            uri: pokemon.image
          }}
          fill={(!isVisible) ? 'black' : ''}
        />
      }
      {(isVisible)
        ? <Text style={styles.pokemonName}>{pokemon.name}</Text>
        : <Text style={{
          ...styles.pokemonName,
          color: 'black',
        }}>???</Text>
      }
    </View>
  )
}