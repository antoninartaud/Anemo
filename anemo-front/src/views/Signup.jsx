import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { postSignup } from '../utils/network';
import 'bootstrap/dist/css/bootstrap.min.css'




export default function Signup(props) {
    let history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [formErrors, setFormErrors] = useState([]);

    const [userCreated, setUserCreated] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("token") || false
        const roleUser = localStorage.getItem("role") || false

        if (token) {
            if (roleUser === "0") {
                history.push("/user")
            } else {
                history.push("/admin")
            }

        }
    }, [])

    const validateForm = () => {
        const errors = []

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email.toLowerCase())) {
            errors.push("Email is not valid")
        }

        if (password !== confirmPassword) {
            errors.push("Passwords are not the same")
        }

        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,30}$/
        if (!regexPassword.test(password)) {
            errors.push("Passwords must have 4 characters, 1 number, 1 upper, 1 special character and 1 lowercase")
        }


        if (name === "") {
            errors.push("Please enter First Name")
        }


        return errors
    }

    const signup = async () => {
        try {
            const validationErrors = validateForm()
            console.log(name)
            console.log(email)
            console.log(password)
            console.log(confirmPassword)

            console.log("validationErro", validationErrors)
            if (validationErrors.length === 0) {
                const result = await postSignup({
                    name,
                    email,
                    password,
                })

                console.log("result", result)


                if (result) {
                    const role = result.role.toString()
                    localStorage.setItem("token", result.token)
                    localStorage.setItem("role", role)
                    props.changeUserConnected(true)
                    // setUserCreated(true)
                    const roleUser = localStorage.getItem("role")

                    if (roleUser === "0") {
                        history.push("/user")
                    } else {
                        history.push("/admin")
                    }


                } else {
                    console.log(result)
                    alert("There was a problem")
                }
            } else {
                setFormErrors(validationErrors)
            }
        } catch (error) {
            console.log(error)
            alert("There was a problem")
        }
    }

    // if (userCreated) {
    //     return (
    //         <div>
    //             <h1 style={{ textAlign: 'center', fontFamily: 'fantasy', marginTop: '150px' }}> User Created!</h1>
    //         </div>
    //     )
    // } else {

    return (
        <>
            <div className="row">
                <div className="offset-3 col-6 mx-auto">
                    {
                        formErrors.map(elem => {
                            return (
                                <div className="alert alert-danger" role="alert">
                                    {elem}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container">
                <div className="row">



                    <div className="offset-3 col-6 mx-auto">
                        <div className="mb-3 row">
                            <label htmlFor="firstName" className="col-sm-2 col-form-label"> Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputConfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <button type="submit" className="btn btn-primary mb-3 col-sm-12" onClick={signup}>create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    // }
}


