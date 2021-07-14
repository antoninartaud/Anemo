import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Icons(props) {
  // console.log('props.questionId dans Icons= questionId', props.questionId);
  // console.log('props dans Icons', props);

  const id = props.questionId;

  return (
    <>
      <div className='d-flex flex-column col-1 border  mx-auto'>
        <Link to={`/edit/${id}`}>
          <FaEdit size='30px' className='mb-2' />
        </Link>

        {/* <FaTrashAlt onClick={() => props.onConfirm(id)} /> */}
        {/* <FaTrashAlt onClick={() => props.onChange(id)} /> */}
        <div>
          <FaTrashAlt size='30px' onClick={() => props.onChange(id)} />
        </div>
      </div>
    </>
  );
}

export default Icons;
