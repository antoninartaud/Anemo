import React, { useState, useEffect } from 'react';

export default function Response(props) {
  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.name;

    props.onChange(id, value);
  };

  return (
    <div className='d-flex justify-content-center my-3'>
      <div className='form-check form-check-inline '>
        <input
          className='form-check-input'
          type='radio'
          name={props.questionsId}
          style={{ marginRight: '30px' }}
          id='inlineRadio1'
          value='1'
          onClick={handleChange}
        />
        <label className='form-check-label' for='inlineRadio1'>
          {' '}
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name={props.questionsId}
          style={{ marginRight: '30px' }}
          id='inlineRadio2'
          value='2'
          onChange={handleChange}
        />
        <label className='form-check-label' for='inlineRadio2'></label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name={props.questionsId}
          style={{ marginRight: '30px' }}
          id='inlineRadio3'
          value='3'
          onClick={handleChange}
        />
        <label className='form-check-label' for='inlineRadio3'>
          {' '}
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name={props.questionsId}
          style={{ marginRight: '30px' }}
          id='inlineRadio3'
          value='4'
          onClick={handleChange}
        />
        <label className='form-check-label' for='inlineRadio3'>
          {' '}
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name={props.questionsId}
          style={{ marginRight: '30px' }}
          id='inlineRadio3'
          value='5'
          onClick={handleChange}
        />
        <label className='form-check-label' for='inlineRadio3'>
          {' '}
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name={props.questionsId}
          style={{ marginRight: '30px' }}
          id='inlineRadio3'
          value='6'
          onClick={handleChange}
        />
        <label className='form-check-label' for='inlineRadio3'>
          {' '}
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name={props.questionsId}
          style={{ marginRight: '30px' }}
          id='inlineRadio3'
          value='7'
          onClick={handleChange}
        />
        <label className='form-check-label' for='inlineRadio3'></label>
      </div>
    </div>
  );
}
