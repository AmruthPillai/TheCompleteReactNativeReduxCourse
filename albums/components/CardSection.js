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
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
})


export default CardSection
