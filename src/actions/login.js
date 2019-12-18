import {
LOGIN_SUCCESS,
LOGIN_PENDING,
LOGIN_FAILURE
} from '../constant/login'
import axios from 'axios';



// export const fetchUsersRequest = () => {
//     return {
//       type: LOGIN_PENDING
//     }
//   }
  
//   export const fetchUsersSuccess = users => {
//     return {
//       type: LOGIN_SUCCESS,
//       payload: users
//     }
//   }
  
//   export const fetchUsersFailure = error => {
//     return {
//       type: LOGIN_FAILURE,
//       payload: error
//     }
//   }

export const requestUser = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_PENDING })
 axios.post('http://localhost:3002/user/login', payload)
    .then(data => dispatch({ type: LOGIN_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error }))
}