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

    console.log(newResponses);

    setResponses(newResponses);
  };

  console.log('props', props);
  console.log('response set', responses);

  const postSend = async () => {
    try {
      if (responses.length === 10) {
        const listResponse = await postReponse(responses);
        console.log(listResponse);
        props.finishCq(true);
      } else {
        setErrors([
          "    vous n'avez pas fini de repondre à toute les questions",
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    try {
      const responseData = await getQuestionList();
      console.log('response', responseData);

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

  // console.log('question', questions);
  // console.log('errors', errors);

  if (errors.length === 0) {
    return (
      <>
        {/* <h1
          style={{
            textAlign: 'center',
            marginTop: '5px',
            fontFamily: 'fantasy',
          }}
        >
          {' '}
          CQ TEST
        </h1> */}
        <div className='container  '>
          {/* <ol className='row flex-column col-10 col-md-8 col-lg-8 border border-success border-5 mx-auto pe-2'> */}
          <div className='row flex-column col-10 col-md-8 col-lg-8 mt-3 mx-auto pe-2'>
            {/* <div
            style={{
              listStyle: 'none',
              textAlign: 'start',
              marginTop: '60px',
            }}
          > */}
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
                    // className='align-items-center'
                    questionsId={elem._id}
                    onChange={onChangeResponse}
                    // className='border border-info border-5'
                  />
                </div>
              );
            })}
            {/* </div> */}
            <div class=' d-flex justify-content-center p-5  '>
              <button
                style={{
                  paddingLeft: '40px',
                  paddingRight: '40px',
                }}
                class='btn btn-lg border border-1 border-secondary'
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
          {/* Affichage message d'erreurs - FG comment */}
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
        {/* <h1
          style={{
            textAlign: 'center',
            marginTop: '5px',
            fontFamily: 'fantasy',
          }}
        >
          {' '}
          CQ TEST
        </h1> */}
        {/* <ol>
          <div
          // style={{
          //   listStyle: 'none',
          //   textAlign: 'center',
          //   marginTop: '10px',
          // }}
          >
            {questions.map((elem) => {
              return (
                <div
                // style={{
                //   listStyle: 'none',
                //   textAlign: 'start',
                //   marginTop: '10px',
                // }}
                >
                  <li>{elem.questionText}</li>
                  <Response
                    questionsId={elem._id}
                    onChange={onChangeResponse}
                  />
                </div>
              );
            })}
            <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
              <button
                style={{ paddingLeft: '40px', paddingRight: '40px' }}
                class='btn btn-primary btn-lg'
                onClick={postSend}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </ol> */}
        <div className='container  '>
          {/* <ol className='row flex-column col-10 col-md-8 col-lg-8 border border-success border-5 mx-auto pe-2'> */}
          <div className='row flex-column col-10 col-md-8 col-lg-8 mt-3 mx-auto pe-2'>
            {/* <div
            style={{
              listStyle: 'none',
              textAlign: 'start',
              marginTop: '60px',
            }}
          > */}
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
                    // className='align-items-center'
                    questionsId={elem._id}
                    onChange={onChangeResponse}
                    // className='border border-info border-5'
                  />
                </div>
              );
            })}
            {/* </div> */}
            <div class=' d-flex justify-content-center p-5  '>
              <button
                style={{
                  paddingLeft: '40px',
                  paddingRight: '40px',
                }}
                class='btn btn-lg border border-1 border-secondary'
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
