import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import '../src/components/ValidatedLoginForm';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Next from './components/next';
import store from './store';
import { Provider } from 'react-redux';

// const routing = (
//     <Router>
//         <div>
//             <ul>
//                 <li>
//             <Link to="/next">Home</Link>
//             </li>
//             <li>
//             <Link to="/">Login</Link>
//             </li>
//             </ul>
//              <Route exact path="/"  component={App} /> 
//             <Route exact path="/next" component={Next} />
//             </div>
//     </Router>
// )

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
