import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    paddingLeft: 20,
    flex: 1,
    borderRightWidth: 1,
    color: '#888',
    borderColor: '#DDD'
  },
  input: {
    color: '#000',
    paddingLeft: 15,
    lineHeight: 28,
    flex: 4
  }
})

export { Input }
