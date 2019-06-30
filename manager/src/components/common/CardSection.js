import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardSection = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
})

export { CardSection }
