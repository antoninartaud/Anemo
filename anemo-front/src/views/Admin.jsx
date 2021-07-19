import React from 'react';
import List from '../components/admin/List';

function Admin() {
  return (
    <>

      <div className='d-flex flex-column '>
        <div className='mx-auto my-4'>
          <h1 className='mt-3 text-center'>Questionnaire</h1>
        </div>
      </div>

      <div className='d-flex justify-content-center'>
        <List />
      </div>
    </>
  );
}

export default Admin;
