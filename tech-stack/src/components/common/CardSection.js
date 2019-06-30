import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardSection = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
})


export { CardSection }
