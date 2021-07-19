import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postSignup } from '../utils/network';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup(props) {
  let history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [formErrors, setFormErrors] = useState([]);

  const [userCreated, setUserCreated] = useState(false);

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

    if (password !== confirmPassword) {
      errors.push('Les mots de passe sont différents');
    }

    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,30}$/;
    if (!regexPassword.test(password)) {
      errors.push(
        'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre , une majuscule  et un caractère spécial'
      );
    }

    if (name === '') {
      errors.push('Le nom est nécessaire');
    }

    return errors;
  };

  const signup = async () => {
    try {
      const validationErrors = validateForm();
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(confirmPassword);

      console.log('validationErro', validationErrors);
      if (validationErrors.length === 0) {
        const result = await postSignup({
          name,
          email,
          password,
        });

        console.log('result', result);

        if (result) {
          const role = result.role.toString();
          localStorage.setItem('token', result.token);
          localStorage.setItem('role', role);
          props.changeUserConnected(true);
          console.log('role');
          const roleUser = localStorage.getItem('role');

          if (roleUser === '0') {
            history.push('/user');
          } else {
            history.push('/admin');
          }
        } else {
          console.log(result);
          alert('There was a problem');
        }
      } else {
        setFormErrors(validationErrors);
      }
    } catch (error) {
      console.log(error);
      alert('There was a problem');
    }
  };



  return (
    <>
      <div
        className='container flex-column'
        style={{ height: '95vh' }}
      >
        <div className='row '>
          <div className='offset-3 col-6 mx-auto '>
            {formErrors.map((elem) => {
              return (
                <div className='alert alert-danger' role='alert'>
                  {elem}
                </div>
              );
            })}
          </div>
        </div>


        <div className='row h-100  '>
          <div className='col-8 col-md-6 col-lg-6 align-self-center mx-auto'>
            <h1 className='text-center mt-5'>CQ Test</h1>
            <div className='align-self-center m-5 mx-auto'>
              <div className='form-floating '>
                <input
                  placeholder='Name'
                  type='text'
                  className='form-control my-3'
                  id='name'
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor='firstName'
                >
                  Nom
                </label>
              </div>
              <div className='form-floating'>
                <input
                  placeholder='Email'
                  type='email'
                  className='form-control my-3'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='email' className='col-sm-4 col-form-label'>
                  Adresse email
                </label>

              </div>
              <div className='form-floating '>
                <input
                  placeholder='Password'
                  type='password'
                  className='form-control my-3'
                  id='inputPassword'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor='inputPassword'
                >
                  Mode de passe
                </label>
                <div className='col-sm-10'></div>
              </div>
              <div className='form-floating'>
                <input
                  placeholder='Confirm Password'
                  type='password'
                  className='form-control my-3'
                  id='inputConfirmPassword'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label
                  htmlFor='inputConfirmPassword'
                >
                  Confirmation mot de passe
                </label>

              </div>
              <div className=' m-5 row justify-content-center'>
                <button
                  type='submit'
                  className='btn btn-primary p-3 '
                  onClick={(e) => signup(e)}
                >
                  Inscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
