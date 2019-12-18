import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { requestUser } from '../actions/login'

import { connect } from 'react-redux'



function LoginForm(props) {
  
  // let history = useHistory()
  const [username, setusername] = useState('');
const [password, setPassword] = useState('')
// notify = () => toast("Wow so easy !")

let loginUser = (e) => {
  e.preventDefault()
  let payload = {
    username: username,
    password: password
  }

  // requestUser(payload)
  props.getLoginUser(payload)


   console.log("props", props.login);
   
  

  // axios.post('http://localhost:3002/user/login', payload).then((res) => {
  //     if (res.data.status === 200) {
  //       history.push("/next");
  //     } else {
  //       toast.error("username or password invalid !", {
  //         position: toast.POSITION.TOP_CENTER
  //       });
  //     }

      
  // }).catch(err => {
  //   console.log(err);
    
  // })
}
  return (
    
    <div>
      
      <form >
        
        <label htmlFor="username">username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        />
        <label htmlFor="username">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={(e) => loginUser(e)}>Login</button>
      </form>
      <ToastContainer />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginUser: (payload) => dispatch(requestUser(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);