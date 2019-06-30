import React from 'react'
import { connect } from 'react-redux'
import { employeeFormClear } from './actions'
import { Scene, Stack, Router as Route, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const Router = ({ employeeFormClear }) => {
  return (
    <Route>
      <Stack key='root' hideNavBar>
        <Stack initial key='auth'>
          <Scene
            initial
            key='login'
            component={LoginForm}
            title='Please Login' />
        </Stack>
        <Stack key='main'>
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employees'
            rightTitle='Add'
            onRight={() => Actions.employeeCreate()} />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Create Employee' />
          <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            onExit={() => employeeFormClear()}
            title='Edit Employee' />
        </Stack>
      </Stack>
    </Route>
  )
}

const mapDispatchToProps = {
  employeeFormClear
}

export default connect(null, mapDispatchToProps)(Router)
