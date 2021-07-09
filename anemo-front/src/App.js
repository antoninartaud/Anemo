import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './views/Admin';
import Add from './views/Add';
import Edit from './views/Edit';
import Signup from "./views/Signup";
import Login from "./views/Login";
import UserPage from "./views/UserPage";

function App() {
    const history = useHistory()
    const [userConnected, setUserConnected] = useState(false);
    const [informDisconnection, setInformDisconnection] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token") || false

        if (token) {
            setUserConnected(true)
        }
    }, [])
    const logout = () => {
        localStorage.removeItem("token")
        setUserConnected(false)
        setInformDisconnection(true)

        setTimeout(() => setInformDisconnection(false), 10000)
    }

    return (
        <BrowserRouter>
            <div className='container'>
                <div>
                    <Link to="/">Signup</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/user" ></Link>
                    <Link to="/admin"></Link>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={logout}>Logout</a>
                    </li>

                </div>

                <Switch>
                    <Route exact path='/admin' component={Admin} />
                    <Route exact path='/edit/:id' component={Edit} />
                    <Route exact path='/add' component={Add} />
                    <Route path="/" exact component={Signup}></Route>
                    <Route path="/login" >
                        <Login changeUserConnected={setUserConnected}></Login>
                    </Route>
                    <Route path="/user" exact component={UserPage}></Route>

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
