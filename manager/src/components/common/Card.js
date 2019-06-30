import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    marginHorizontal: 15,
    marginTop: 15,
  }
})


export { Card }
