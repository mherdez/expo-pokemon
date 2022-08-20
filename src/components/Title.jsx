import React from 'react'
import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { styles } from '../themes/stylesTheme'

export default function Title() {
  return (
  <>
    <StatusBar style="auto" />
    <Text style={styles.title}>
      ¿ Quién es este
    </Text>
    <Text style={{
      ...styles.title,
      paddingTop: 10,
      fontSize: 30,
    }}>
      Pokémon ?
    </Text>
  </>
  )
}