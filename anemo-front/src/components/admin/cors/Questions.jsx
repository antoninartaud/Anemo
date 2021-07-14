import React from 'react';

const Questions = (props) => {
  // console.log(props);
  return (
    <>
      <p className='col-8 border'>{props.question.questionText}</p>
    </>
  );
};

export default Questions;
