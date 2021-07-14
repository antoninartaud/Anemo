import React from 'react';
import { Link } from 'react-router-dom';

import List from '../components/admin/List';

function Admin() {
  return (
    <>
      <div className='d-flex flex-column '>
        <div className='mx-auto my-5'>
          <h1 className='mt-5 text-center'>Questionnaire</h1>
          <Link to='/add'>
            <button className='mt-5 ms-5'>Ajouter une question</button>
          </Link>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <List />
      </div>
    </>
  );
}

export default Admin;
