import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../utils/network';

const Login = (props) => {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    const roleUser = localStorage.getItem('role') || false;

    if (token) {
      if (roleUser === '0') {
        history.push('/user');
      } else {
        history.push('/admin');
      }
    }
  }, []);

  const validateForm = () => {
    const errors = [];

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email.toLowerCase())) {
      errors.push("Votre adresse email n'est pas valide");
    }

    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,30}$/;
    if (!regexPassword.test(password)) {
      errors.push(
        'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre , une majuscule  et un caractère spécial'
      );
    }

    return errors;
  };

  const login = async () => {
    try {
      const validateFormErreur = validateForm();
      if (validateFormErreur.length === 0) {
        const result = await postLogin({ email, password });

        if (result) {
          const role = result.role.toString();
          localStorage.setItem('token', result.token);
          localStorage.setItem('role', role);
          props.changeUserConnected(true);

          const roleUser = localStorage.getItem('role');

          if (roleUser === '0') {
            history.push('/user');
          } else {
            history.push('/admin');
          }
        } else {
          alert('probleme');
        }
      } else {
        setMessageError(validateForm);
      }
    } catch (error) {
      console.error(error);
    }
  };
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

      
      <div
        
        className='container'
        style={{ height: '95vh' }}
      >
        <div className='row h-100 justify-content-center'>
          <div className='col-8 col-md-6 col-lg-6 align-self-center'>
            <h1 className='text-center mt-5 '>CQ Test</h1>
            <div className=' m-5 '>

              

              <div className='form-floating'>
                <input
                  placeholder='Email'
                  type='text'
                  className='form-control my-3'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='email' className='col col-form-label'>
                  Adresse email
                </label>
              </div>

              

              <div className='form-floating '>
                <input
                  placeholder='Password'
                  type='password'
                  className='form-control my-3'
                  id='InputPassword'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor='inputPassword'>Mot de passe</label>
                <div className='col-sm-10'></div>
              </div>

              

              <div className=' m-5 row justify-content-end'>
                <button
                  type='submit'
                  className='btn btn-primary p-3 '
                  onClick={(e) => login(e)}
                >
                  Connexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
