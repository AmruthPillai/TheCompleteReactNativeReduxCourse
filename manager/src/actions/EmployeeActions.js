import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATED,
  EMPLOYEE_CREATED,
  EMPLOYEE_FORM_CLEAR,
  EMPLOYEES_FETCH_SUCCESS
} from '../constants'

export const employeeUpdate = (prop, value) => ({
  type: EMPLOYEE_UPDATED,
  payload: { prop, value }
})

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATED })
        Actions.pop()
      })
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        })
      })
  }
}

export const employeeFormClear = () => ({
  type: EMPLOYEE_FORM_CLEAR
})

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth()

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => Actions.pop())
  }
}

export const employeeFire = ({ uid }) => {
  const { currentUser } = firebase.auth()

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => Actions.pop())
  }
}