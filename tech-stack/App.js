import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'

import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <View style={styles.statusBar}></View>
        <Header title={'Tech Stack'} />
        <LibraryList />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: '#1976d2'
  }
})

export default App