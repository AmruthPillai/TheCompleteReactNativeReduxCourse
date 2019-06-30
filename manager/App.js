import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import firebase from 'firebase'
import _ from 'lodash'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'

import Router from './src/Router'

// Ignore Timer Warnings
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCKN3dZzpgnYIRmVxhJ_JnBobjLd1WiWBU',
      authDomain: 'reactnativeredux-manager.firebaseapp.com',
      databaseURL: 'https://reactnativeredux-manager.firebaseio.com',
      projectId: 'reactnativeredux-manager',
      storageBucket: '',
      messagingSenderId: '222580679887',
      appId: '1:222580679887:web:136bb0724fe2f912'
    }

    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    )

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

