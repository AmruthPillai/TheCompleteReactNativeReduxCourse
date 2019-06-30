import {
  EMPLOYEE_UPDATED,
  EMPLOYEE_CREATED,
  EMPLOYEE_FORM_CLEAR
} from '../constants'

const initialState = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EMPLOYEE_UPDATED:
      return {
        ...state,
        [payload.prop]: payload.value
      }
    case EMPLOYEE_CREATED:
      return initialState
    case EMPLOYEE_FORM_CLEAR:
      return initialState
    default:
      return state
  }
}
