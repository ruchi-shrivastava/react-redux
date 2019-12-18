import {
    LOGIN_SUCCESS,
    LOGIN_PENDING,
    LOGIN_FAILURE
    } from '../constant/login'
    

    const initialState = {
        loading: false,
        login: null,
        error: ''
      }
      
      const requestUser = (state = initialState, action) => {
        switch (action.type) {
          case LOGIN_PENDING:
            return {
              ...state,
              loading: true
            }
          case LOGIN_SUCCESS:
            return {
              loading: false,
              login: action.payload,
              error: ''
            }
          case LOGIN_FAILURE:
            return {
              loading: false,
              login: null,
              error: action.payload
            }
          default: return state
        }
      }
      
      export default requestUser