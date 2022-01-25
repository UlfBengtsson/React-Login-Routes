import React, { useReducer } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export const UserContext = React.createContext();

function App() {

  function reducer(user, action) {
    switch (action.type) {
      case 'login':
        return {isLoggedIn: true};
      case 'logout':
        return {isLoggedIn: false};
      case 'status':
        return user;
      default:
        throw new Error();
    }
  }

  const [user, dispatch] = useReducer(reducer, {isLoggedIn: false});

  return (
    <div>
    <Router>
        <UserContext.Provider value={dispatch}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          { user.isLoggedIn ? 
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            :
            <li>
              <Link to="/login">Login</Link>
            </li>
          }

          </ul>
        </nav>
          <p>{console.log(user)}</p>
        <Routes >
          <Route path="/logout" element={<Logout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
        </Routes >
      </UserContext.Provider>
    </Router>
      </div>
  );
}

export default App;
