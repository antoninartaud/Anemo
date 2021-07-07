import { BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Signup from "./views/Signup";
import Login from "./views/Login";
import Admin from "./views/Admin";
import UserPage from "./views/UserPage";

export default function App() {

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
            <div>
                <Link to="/">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/user" >User</Link>
                <li className="nav-item">
                    <a href="#" className="nav-link" onClick={logout}>Logout</a>
                </li>

            </div>
            <Switch>
                <Route path="/" exact component={Signup}></Route>
                <Route path="/login" >
                    <Login changeUserConnected={setUserConnected}></Login>
                </Route>
                <Route path="/user" exact component={UserPage}></Route>



            </Switch>
        </BrowserRouter>


    )
}





