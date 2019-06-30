import React from 'react'
import { View, StyleSheet, StatusBar as SB } from 'react-native'

const StatusBar = () => {
  return (
    <View style={styles.statusBar} />
  )
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#1976d2',
    height: SB.currentHeight
  }
})


export { StatusBar }
