import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from '../themes/stylesTheme'

export default function ClickmeButton( {isClickVisible, handleClick }) {
  return (
    <>
      {
        ( isClickVisible ) &&
        <TouchableOpacity
        style={styles.button}
        onPress={ handleClick }
        >
          <Text style={styles.buttonText}>
            Click me
          </Text>
        </TouchableOpacity>
      }
    </>
  )
}