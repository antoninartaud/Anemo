import React, { useState, useEffect } from 'react';
import {
  getQuestionList,
  getQuestions,
  postReponse,
} from '../../utils/network';
import Response from './Response';

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [userId, setUserId] = useState('');
  const [errors, setErrors] = useState([]);

  const onChangeResponse = (questionId, responseValue) => {
    const newFilterResponses = responses.filter((elem) => {
      return elem.questionId !== questionId;
    });
    const newResponses = [
      ...newFilterResponses,
      { responseValue, questionId, userId },
    ];


    setResponses(newResponses);
  };


  const postSend = async () => {
    try {
      if (responses.length === 10) {
        const listResponse = await postReponse(responses);
        console.log(listResponse);
        props.finishCq(true);
      } else {
        setErrors(['Une réponse à toutes les questions est nécessaire']);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    try {
      const responseData = await getQuestionList();

      if (responseData) {
        setQuestions(responseData.questionList);
        setUserId(responseData.userId);
      } else {
        alert('There was a problem');
      }
    } catch (error) {
      alert('There was a problem');
    }
  }, []);


  if (errors.length === 0) {
    return (
      <>
       
        <div className='container  '>
          <div className='row flex-column col-10 col-md-8 col-lg-8 mt-3 mx-auto pe-2'>
           
            {questions.map((elem) => {
              return (
                <div className='border mx-auto my-2'>
                  <li
                    className='border-5 my-2'
                    style={{ backgroundColor: '#dfe1e6' }}
                  >
                    {elem.questionText}
                  </li>
                  <Response
                    questionsId={elem._id}
                    onChange={onChangeResponse}
                  />
                </div>
              );
            })}
            <div class=' d-flex justify-content-center p-5  '>
              <button
                style={{
                  paddingLeft: '40px',
                  paddingRight: '40px',
                }}
                class='btn btn-primary btn-lg border border-1 border-secondary'
                onClick={postSend}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='row'>
          <div className='offset-3 col-6 mx-auto'>
            {errors.map((elem) => {
              return (
                <div className='alert alert-danger' role='alert'>
                  {elem}
                </div>
              );
            })}
          </div>
        </div>

        <div className='container  '>
          <div className='row flex-column col-10 col-md-8 col-lg-8 mt-3 mx-auto pe-2'>
            
            {questions.map((elem) => {
              return (
                <div className='border mx-auto my-2'>
                  <li
                    className='border-5 my-2'
                    style={{ backgroundColor: '##dfe1e6' }}
                  >
                    {elem.questionText}
                  </li>
                  <Response
                    questionsId={elem._id}
                    onChange={onChangeResponse}
                  />
                </div>
              );
            })}
            <div class=' d-flex justify-content-center p-5  '>
              <button
                style={{
                  paddingLeft: '40px',
                  paddingRight: '40px',
                }}
                class='btn btn-primary btn-lg border border-1 '
                onClick={postSend}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
        )
      </>
    );
  }
};

export default Questions;
