import requestUser from './reducer/login'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    login : requestUser,
   
  })
  
  export default rootReducer