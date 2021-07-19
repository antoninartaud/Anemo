import React, { useState } from 'react';
import { addQuestion } from '../utils/network';

import { useHistory } from 'react-router-dom';

function Add() {
  const [newQuestion, setNewQuestion] = useState('');

  const history = useHistory();

  const handleQuestionInput = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addQuestion({ questionText: newQuestion });
      history.push('/admin');
    } catch (error) {
      alert('There was a problem in handleSubmit add.jsx');
    }
  };

  

  return (
    <div className='container vh-90'>
      <div className='row flex-column mx-auto'>
        <div
          className='justify-content-center align-items-center'
          style={{ height: '600px' }}
        >
          <h1
            className='text-center'
            style={{ marginTop: '100px', marginBottom: '100px' }}
          >
            Ajouter une question
          </h1>
          <div
            className='form-container d-flex flex-column'
            style={{ marginTop: '200px' }}
          >
            <form className='edit-form mx-auto' onSubmit={handleSubmit}>
              <input
                style={{ width: '600px', height: '90px' }}
                id='questionText'
                type='text'
                placeholder='Question'
                name='questionText'
                value={newQuestion}
                onChange={(e) => handleQuestionInput(e)}
              ></input>

              <input
                className='form-field'
                type='submit'
                style={{ height: '90px' }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
