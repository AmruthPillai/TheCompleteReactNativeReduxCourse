import React, { Component } from 'react'
import { View, Picker, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { CardSection, Input } from './common'

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props

    return (
      <View>
        <CardSection>
          <Input
            label='Name'
            placeholder='Jane Doe'
            value={name}
            onChangeText={value => employeeUpdate('name', value)} />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={phone}
            onChangeText={value => employeeUpdate('phone', value)} />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <View style={{ paddingVertical: 10, paddingLeft: 14 }}>
            <Picker
              selectedValue={shift}
              onValueChange={value => employeeUpdate('shift', value)}>
              <Picker.Item label='Monday' value='Monday' />
              <Picker.Item label='Tuesday' value='Tuesday' />
              <Picker.Item label='Wednesday' value='Wednesday' />
              <Picker.Item label='Thursday' value='Thursday' />
              <Picker.Item label='Friday' value='Friday' />
              <Picker.Item label='Saturday' value='Saturday' />
              <Picker.Item label='Sunday' value='Sunday' />
            </Picker>
          </View>
        </CardSection>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pickerLabel: {
    paddingTop: 18,
    paddingLeft: 20,
    color: '#888'
  }
})

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

const mapDispatchToProps = {
  employeeUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)
