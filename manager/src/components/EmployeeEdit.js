import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { textWithoutEncoding } from 'react-native-communications'
import { employeeUpdate, employeeSave, employeeFire } from '../actions'
import { Card, CardSection, Button, ConfirmModal } from './common';
import EmployeeForm from './EmployeeForm'

export class EmployeeEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate(prop, value)
    })
  }

  onSave() {
    const { uid } = this.props.employee
    const { name, phone, shift, employeeSave } = this.props

    employeeSave({ name, phone, shift, uid })
  }

  onText() {
    const { phone, shift } = this.props
    textWithoutEncoding(phone, `Your upcoming shift is on ${shift}`)
  }

  onFire() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  onAccept() {
    const { uid } = this.props.employee
    this.props.employeeFire({ uid })

    this.setState({
      showModal: false
    })
  }

  onDecline() {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { name } = this.props

    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onSave.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onText.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFire.bind(this)}>
            Fire Employee
          </Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          {`Are you sure you want to fire ${name}?`}
        </ConfirmModal>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

const mapDispatchToProps = {
  employeeUpdate,
  employeeSave,
  employeeFire
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit)
