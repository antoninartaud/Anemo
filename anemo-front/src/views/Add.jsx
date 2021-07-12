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

  console.log('newQuestion state on add.jsx', newQuestion);

  return (
    <div>
      <h3>Add.jsx</h3>
      <div class='form-container'>
        <form className='edit-form' onSubmit={handleSubmit}>
          <label for='questionText'>Question</label>
          <textarea
            id='questionText'
            type='text'
            placeholder='Question'
            name='questionText'
            value={newQuestion}
            onChange={(e) => handleQuestionInput(e)}
          ></textarea>

          <input className='form-field' type='submit' />
        </form>
      </div>
    </div>
  );
}

export default Add;
