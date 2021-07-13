import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './views/Admin';
import Add from './views/Add';
import Edit from './views/Edit';
import Signup from './views/Signup';
import Login from './views/Login';
import UserPage from './views/UserPage';

function App() {
  const history = useHistory();
  const [userConnected, setUserConnected] = useState(false);
  const [informDisconnection, setInformDisconnection] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || false;

    if (token) {
      setUserConnected(true);
    }
  }, []);
  const logout = () => {
    localStorage.removeItem('token');
    setUserConnected(false);
    setInformDisconnection(true);

    setTimeout(() => setInformDisconnection(false), 10000);
  };

  return (
    <BrowserRouter>
      {/* Original Code Lines commmented - FG */}
      {/* <div className='container'>
        <div>
          <Link to='/'>Signup</Link>
          <Link to='/login'>Login</Link>

          <li className='nav-item'>
            <a href='/' className='nav-link' onClick={logout}>
              Logout
            </a>
          </li> 
        </div> */}

      <nav className='navbar navbar-expand-md bg-dark navbar-dark text-light'>
        {/* class container to align the text inside the navbar to the grid */}
        <div className='container'>
          {/* class navbar-nav where all the links go */}
          <div className='navbar-nav ms-auto '>
            <Link className='nav-link ' to='/'>
              Signup
            </Link>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
            <a className='nav-link' href='/' onClick={logout}>
              Logout
            </a>
            <Link className='d-none' to='/user'></Link>
            <Link className='d-none' to='/admin'></Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/edit/:id' component={Edit} />
        <Route exact path='/add' component={Add} />
        <Route exact path='/'>
          <Signup changeUserConnected={setUserConnected}></Signup>
        </Route>
        <Route exact path='/login'>
          <Login changeUserConnected={setUserConnected}></Login>
        </Route>
        <Route path='/user' exact component={UserPage}></Route>
      </Switch>
      {/* </div> commented - FG */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
