import React, { useEffect, useState } from 'react';
import { getQuestionList, deleteQuestion } from '../../utils/network';
import Icons from './cors/Icons';
import Questions from './cors/Questions';

function List() {
  const [questions, setQuestions] = useState([]);

  //display Confirmation deleted question and store the question ID
  const [confirmationId, setConfirmationId] = useState('');

  useEffect(async () => {
    try {
      const responseArrayQuestions = await getQuestionList();
      if (responseArrayQuestions) {
        setQuestions(responseArrayQuestions);
      } else {
        alert('There was a problem in setting questions state');
      }
    } catch (error) {
      alert('There was a problem');
    }
  }, []);

  const handleClickDeleteRequest = async (id) => {
    try {
      await deleteQuestion(id);
      setConfirmationId('');
      const responseArrayQuestions = await getQuestionList();
      setQuestions(responseArrayQuestions);
    } catch (error) {
      console.log(error);
    }
  };

  const renderConfirmation = () => {
    return (
      <>
        <h4>Confirmation render</h4>
        <button onClick={() => handleClickDeleteRequest(confirmationId)}>
          OUI
        </button>
        <button onClick={() => setConfirmationId('')}>NON</button>
      </>
    );
  };

  return (
    <>
      <div className='container'>
        {confirmationId ? (
          renderConfirmation()
        ) : (
          <div className='row'>
            <div>
              {questions.map((elem, index) => (
                <div>
                  <Questions question={elem} />
                  <Icons
                    questionId={elem._id}
                    onConfirm={handleClickDeleteRequest}
                    onChange={setConfirmationId}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default List;
