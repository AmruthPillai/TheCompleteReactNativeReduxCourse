import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../constants'

const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: payload
      }
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: payload
      }
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: payload
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        password: '',
        loading: false,
        error: 'Authentication Failed'
      }
    default:
      return state
  }
}
