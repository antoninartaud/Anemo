import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Icons(props) {
  // console.log('props.questionId dans Icons= questionId', props.questionId);
  // console.log('props dans Icons', props);

  const id = props.questionId;

  return (
    <>
      <Link to={`/edit/${id}`}>
        <FaEdit />
      </Link>

      {/* <FaTrashAlt onClick={() => props.onConfirm(id)} /> */}
      {/* <FaTrashAlt onClick={() => props.onChange(id)} /> */}
      <FaTrashAlt onClick={() => props.onChange(id)} />
    </>
  );
}

export default Icons;
