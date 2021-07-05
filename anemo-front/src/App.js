import { BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import React from 'react'
import Signup from "./views/Signup";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/">Signup</Link>
            </div>
            <Switch>
                <Route path="/" exact component={Signup}></Route>

            </Switch>
        </BrowserRouter>


    )
}





