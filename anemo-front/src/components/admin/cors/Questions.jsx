import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getQuestionList } from '../../../utils/network';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    try {
      const responseData = await getQuestionList();

      if (responseData) {
        setQuestions(responseData);
      } else {
        alert('There was a problem');
      }
    } catch (error) {
      alert('There was a problem');
    }
  }, []);

  return (
    <>
      <div className='container'>
        <h1>Liste des Questions</h1>

        <div className='row'>
          {questions.map((elem, index) => {
            return (
              <div
                key={index}
                className='col-6 my-4 d-flex justify-content-center'
              ></div>
            );
          })}
        </div>
      </div>
      <div>
        <h4>salut from questions.jsx</h4>
      </div>
    </>
  );
};

export default Questions;
