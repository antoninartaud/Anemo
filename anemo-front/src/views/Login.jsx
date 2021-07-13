import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { postLogin } from '../utils/network';


const Login = (props) => {
    let history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messageError, setMessageError] = useState([])

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



        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,30}$/
        if (!regexPassword.test(password)) {
            errors.push("Passwords must have  4 characters, 1 number, 1 upper , 1 special character  and 1 lowercase")
        }

        return errors
    }


    const login = async () => {
       
        try {
            
             const validateFormErreur = validateForm()
            if (validateFormErreur.length === 0) {
                const result = await postLogin({ email, password })


                if (result) {
                    const role = result.role.toString()
                    localStorage.setItem("token", result.token)
                    localStorage.setItem("role", role)
                    props.changeUserConnected(true)

                    const roleUser = localStorage.getItem("role")

                    if (roleUser === "0") {
                        history.push("/user")
                    } else {
                        history.push("/admin")
                    }
                } else {

                    alert("probleme")
                }
            }else{
                setMessageError(validateForm)
            }

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <div className='row'>
        <div className='offset-3 col-6 mx-auto'>
          {messageError.map((elem) => {
            return (
              <div className='alert alert-danger' role='alert'>
                {elem}
              </div>
            );
          })}
        </div>
      </div>

      {/* Affichage Login - FG comment */}
      <div
        className='container border border-secondary border-5'
        style={{ height: '100vh' }}
      >
        <div className='row h-100 justify-content-center border border-success border-5'>
          <div className='col-10 col-md-8 col-lg-6 border border-danger border-5 align-self-center'>
            <h1 className='text-center mt-5'>CQ Test</h1>
            <div className='border-warning border border-5 m-5 '>
              {/* Code originel - FG comment */}

              {/* <div className='mb-3 row'>
                <label htmlFor='email' className='col-sm-2 col-form-label'>
                  Email
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div> */}

              <div className='form-floating'>
                <input
                  placeholder='Email'
                  type='text'
                  className='form-control my-3'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='email' className='col-sm-2 col-form-label'>
                  Email
                </label>
              </div>

              {/* Code originel - FG comment */}

              {/* <div className='mb-3 row'>
                <label
                  htmlFor='inputPassword'
                  className='col-sm-2 col-form-label'
                >
                  Password
                </label>
                <div className='col-sm-10'>
                  <input
                    type='password'
                    className='form-control'
                    id='inputPassword'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div> */}

              <div className='form-floating '>
                <input
                  placeholder='Password'
                  type='password'
                  className='form-control my-3'
                  id='InputPassword'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor='inputPassword'>Password</label>
                <div className='col-sm-10'></div>
              </div>

              {/* Code originel - FG comment */}

              {/* <div className='mb-3 row'>
                <button
                  type='submit'
                  className='btn btn-primary mb-3 col-sm-8 offset-3  '
                  onClick={login}
                >
                  Login
                </button>
              </div> */}

              <div className=' m-5 row justify-content-end'>
                <button
                  type='submit'
                  className='btn btn-primary p-3 '
                  onClick={(e) => login(e)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );





}

export default Login;
