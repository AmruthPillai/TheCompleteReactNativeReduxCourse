import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import Header from './components/Header';
import AlbumList from './components/AlbumList'

const App = () => (
  <View style={styles.container}>
    <View style={styles.statusBar} />
    <Header title={'Albums'} />
    <AlbumList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: '#1976d2',
    height: StatusBar.currentHeight
  }
})


export default App
