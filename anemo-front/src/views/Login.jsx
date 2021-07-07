import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { postLogin } from '../utils/network';


const Login = (props) => {
    let history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token") || false
        console.log(token)

        if (token) {
            history.push("/user")
        }
    }, [])

    const login = async () => {
        try {
            const result = await postLogin({ email, password })
            
            if (result) {
                localStorage.setItem("token", result.token)
                props.changeUserConnected(true)
                history.push("/user")
            } else {
                alert("There was a problem")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6 mx-auto">
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                </div>
                <div className="mb-3 row">
                    <button type="submit" className="btn btn-primary mb-3 col-sm-8 offset-3  " onClick={login}>Login</button>
                </div>

            </div>
        </div>
    );
}

export default Login;
