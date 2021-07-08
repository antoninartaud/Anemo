import React, { useState } from 'react';
import { addQuestion } from '../utils/network';

import { Link } from 'react-router-dom';

function Add() {
  const [newQuestion, setNewQuestion] = useState('');

  const handleQuestionInput = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addQuestion({ questionText: newQuestion });
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
            id='questionText' //Pour lier avec label className='form-field'
            type='text'
            placeholder='Question'
            name='questionText'
            value={newQuestion}
            // value={Object.keys(question).length === 0 ? null : newQuestion}
            //TODO vérifier onChange sans arrow fonction
            onChange={(e) => handleQuestionInput(e)}
          ></textarea>

          <input className='form-field' type='submit' />
        </form>
      </div>
    </div>
  );
}

export default Add;
