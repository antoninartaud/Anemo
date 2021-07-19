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
  

  useEffect(async () => {
    try {
      const responseQuestion = await getQuestion(id);

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
            Modifier une question
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
                onChange={(e) => handleQuestionInputChange(e)}
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

export default Edit;
