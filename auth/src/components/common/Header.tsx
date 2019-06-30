import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#1e88e5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 4,
    shadowColor: '#000',
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  }
})


export { Header }