import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//  import Login from './components/Login'
import LoginForm from './components/LoginForm';
// import ValidatedLoginForm from './components/ValidatedLoginForm'
import Next from './components/next';


function App() {
  return (
    <div>
     <h1>Login Form</h1> 
    
      {/* <Next></Next> */}

    <LoginForm></LoginForm> 
    {/* <ValidatedLoginForm></ValidatedLoginForm> */}
    </div>
  );
 
}

export default App;
