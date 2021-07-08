import React, { useEffect, useState } from 'react';
import { getQuestionList, deleteQuestion } from '../../utils/network';
import Icons from './cors/Icons';
import Questions from './cors/Questions';

function List() {
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    try {
      const responseArrayQuestions = await getQuestionList();
      // console.log('responseArrayQuestions', responseArrayQuestions);
      if (responseArrayQuestions) {
        setQuestions(responseArrayQuestions);
      } else {
        alert('There was a problem in setting questions state');
      }
    } catch (error) {
      alert('There was a problem');
    }
  }, []);
  console.log('questions', questions);

  const handleClick = (id) => {
    deleteQuestion(id);
  };

  return (
    <>
      <div className='container'>
        <h4>Liste des Questions</h4>

        <div className='row'>
          <div>
            {questions.map((elem, index) => (
              <div>
                <Questions question={elem} />
                <Icons questionId={elem._id} onClick={handleClick} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div>
        <h4>salut from questions.jsx</h4>
      </div> */}
    </>
  );
}

export default List;
