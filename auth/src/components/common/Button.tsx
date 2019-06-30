import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#1e88e5',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  text: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingVertical: 16
  }
})


export { Button }
