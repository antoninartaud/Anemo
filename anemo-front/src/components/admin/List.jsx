import React, { useEffect, useState } from 'react';
import { getQuestionList, deleteQuestion } from '../../utils/network';
import { Link } from 'react-router-dom';
import Icons from './cors/Icons';
import Questions from './cors/Questions';

function List() {
  const [questions, setQuestions] = useState([]);

  const [confirmationId, setConfirmationId] = useState('');

  useEffect(async () => {
    try {
      const responseArrayQuestions = await getQuestionList();
      if (responseArrayQuestions) {
        setQuestions(responseArrayQuestions.questionList);
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
      setQuestions(responseArrayQuestions.questionList);
    } catch (error) {
      console.log(error);
    }
  };

  const renderConfirmation = () => {
    return (
      <div className='container'>
        <div className='row flex-column '>
          <div
            className='d-flex justify-content-center '
            style={{
              marginTop: '200px',
              backgroundColor: '#EAEEF2',
            }}
          >
            <h2 className='my-4'>Suppression de la question ?</h2>
            <div className='my-3 ' style={{ marginLeft: '70px' }}>
              <button
                className='btn btn-primary btn-lg mx-4'
                onClick={() => handleClickDeleteRequest(confirmationId)}
              >
                OUI
              </button>
              <button
                className='btn btn-primary btn-lg mx-4 '
                onClick={() => setConfirmationId('')}
              >
                NON
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='container'>
        {confirmationId ? (
          renderConfirmation()
        ) : (
          <div className='row '>
            <div className='pb-5 d-flex justify-content-center '>
              <Link to='/add'>
                <button className='mt-5 ms-4 btn btn-lg btn-primary '>
                  Ajouter une question
                </button>
              </Link>
            </div>
            <div>
              {questions.map((elem, index) => (
                <div
                  className='d-flex border bg m-2'
                  style={{ backgroundColor: '#eaeef2' }}
                >
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
