import {
  EMPLOYEES_FETCH_SUCCESS
} from '../constants'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log(payload)
      return payload
    default:
      return state
  }
}
