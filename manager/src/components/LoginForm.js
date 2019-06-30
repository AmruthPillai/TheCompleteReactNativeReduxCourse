import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  _buildErrorText() {
    if (this.props.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  _buildButton() {
    if (this.props.loading) {
      return (
        <Spinner size='large' />
      )
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    );
  }

  render() {
    const { email, password } = this.props

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={email}
            placeholder='abc@xyz.com'
            onChangeText={this.onEmailChange.bind(this)} />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            value={password}
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)} />
        </CardSection>

        {this._buildErrorText()}

        <CardSection>
          {this._buildButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 8
  },
  errorText: {
    alignSelf: 'center',
    color: 'red'
  }
})


const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth

  return {
    email,
    password,
    error,
    loading
  }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm)

