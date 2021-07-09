import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getQuestion, updateQuestion } from '../utils/network';

function Edit() {
  const [question, setQuestion] = useState({});
  const [newQuestion, setNewQuestion] = useState('');

  const history = useHistory();

  const handleQuestionInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const { id } = useParams();
  console.log('id', id);

  useEffect(async () => {
    try {
      const responseQuestion = await getQuestion(id);
      console.log(responseQuestion);

      if (responseQuestion) {
        setQuestion(responseQuestion.question);
        setNewQuestion(responseQuestion.question.questionText);
      } else {
        alert('There was a problem in setting question state in Edit');
      }
    } catch (error) {
      alert('There was a problem ');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateQuestion(id, { questionText: newQuestion });
      history.push('/admin');
    } catch (error) {
      alert('There was a problem in handleSubmit');
    }
  };

  return (
    <>
      <h3>Edit.jsx</h3>
      <div className='form-container'>
        <form className='edit-form' onSubmit={handleSubmit}>
          {/* onSubmit={ } Création fonction qui déclenche sendQuestion requête post...prévoir e.prevetnDefault */}
          <label for='questionText'>Question</label>
          <textarea
            id='questionText' //Pour lier avec label className='form-field'
            type='text'
            placeholder='Question'
            name='questionText'
            value={newQuestion}
            // value={Object.keys(question).length === 0 ? null : newQuestion}
            onChange={(e) => handleQuestionInputChange(e)}
          ></textarea>

          <input className='form-field' type='submit' />
        </form>
      </div>
    </>
  );
}

export default Edit;
