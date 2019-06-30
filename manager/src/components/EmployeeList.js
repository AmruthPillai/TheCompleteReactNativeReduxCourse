import React, { Component } from 'react'
import { FlatList } from 'react-native'

import _ from 'lodash';
import { connect } from 'react-redux'

import { employeesFetch } from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employees.length !== this.props.employees.length) {
      this.props.employeesFetch();
    }
  }

  renderItem({ item }) {
    return (
      <ListItem employee={item} />
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(employee, idx) => idx.toString()} />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employee, (val, uid) => {
    return { ...val, uid };
  });

  return { employees }
}

const mapDispatchToProps = {
  employeesFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
