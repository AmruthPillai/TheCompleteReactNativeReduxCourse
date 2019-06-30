import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import firebase from 'firebase'

import { Button, Card, CardSection, Input, Spinner } from './common'

interface ILoginFormState {
  email: string,
  password: string,
  error: string,
  loading: boolean
}

export default class LoginForm extends Component<{}, ILoginFormState> {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  onLogin() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  _renderErrorText() {
    if (this.state.error) {
      return (
        <View style={styles.error}>
          <Text style={styles.errorText}>{this.state.error}</Text>
        </View>
      )
    }
  }

  _renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />
    } else {
      return (
        <Button onPress={this.onLogin.bind(this)}>Login</Button>
      )
    }
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false
    })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'abc@xyz.com'}
            value={this.state.email}
            onChangeText={(email: string) => this.setState({ email })} />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label={'Password'}
            placeholder={'password'}
            value={this.state.password}
            onChangeText={(password: string) => this.setState({ password })} />
        </CardSection>

        {this._renderErrorText()}

        <CardSection>
          {this._renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    opacity: 0.6
  }
})
