import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import firebase from 'firebase';

import { Header, Card, CardSection, Button, Spinner } from './src/components/common'
import LoginForm from './src/components/LoginForm'

interface IAuthState {
  loggedIn: boolean
}

export default class App extends Component<{}, IAuthState> {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null
    }
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD6ZD-Q1FVI8PR29akM90rDXEwzVPYC944',
      authDomain: 'reactnativeredux-auth.firebaseapp.com',
      databaseURL: 'https://reactnativeredux-auth.firebaseio.com',
      projectId: 'reactnativeredux-auth',
      storageBucket: 'gs://reactnativeredux-auth.appspot.com',
      messagingSenderId: '56186889142',
      appId: '1:56186889142:web:fa6ef42f9397b4c0'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  logout() {
    firebase.auth().signOut()
  }

  _renderLogin() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={this.logout.bind(this)}>Logout</Button>
            </CardSection>
          </Card>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={styles.spinnerContainer}>
            <Spinner size={'large'} />
          </View>
        )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.statusBar}></View>
        <Header title={'Authentication'} />

        {this._renderLogin()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: '#1976d2'
  }
})

