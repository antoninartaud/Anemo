import React, { useState, useEffect } from 'react';

export default function Response(props) {
  const handleChange = (e) => {
    console.log('e.target.value', e.target.value);
    console.log('e.target.name', e.target.name);
    const value = e.target.value;
    const id = e.target.name;

    props.onChange(id, value);
    console.log(props);
  };

  return (
    <div className='container'>
      <div className='row'>
        {/* <div className='form-check form-check-inline'> */}
        <div className='btn-group'>
          <input
            // className='form-check-input '
            className='btn-check '
            type='radio'
            name={props.questionsId}
            id='inlineRadio1'
            value='1'
            onClick={handleChange}
            // autocomplete='off'
          />
          {/* <label className='form-check-label' for='inlineRadio1'> */}
          <label className='btn btn-outline-primary' for='inlineRadio1'>
            1
          </label>
          {/* </div> */}
          {/* <div className='form-check form-check-inline'> */}
          {/* <div className='btn-group'> */}
          <input
            // className='form-check-input'
            className='btn-check '
            type='radio'
            name={props.questionsId}
            id='inlineRadio2'
            value='2'
            onChange={handleChange}
            // autocomplete='off'
          />
          {/* <label className='form-check-label' for='inlineRadio2'> */}
          <label className='btn btn-outline-primary' for='inlineRadio2'>
            2
          </label>
          {/* </div> */}
          {/* <div className='form-check form-check-inline'> */}
          <input
            className='btn-check '
            type='radio'
            name={props.questionsId}
            id='inlineRadio3'
            value='3'
            onClick={handleChange}
            // autocomplete='off'
          />
          <label className='btn btn-outline-primary' for='inlineRadio3'>
            3
          </label>
          {/* </div> */}
          {/* <div className='form-check form-check-inline'> */}
          <input
            className='btn-check '
            type='radio'
            name={props.questionsId}
            id='inlineRadio4'
            value='4'
            onClick={handleChange}
            // autocomplete='off'
          />
          <label className='btn btn-outline-primary' for='inlineRadio4'>
            4
          </label>
          {/* </div> */}
          {/* <div className='form-check form-check-inline'> */}
          <input
            className='btn-check '
            type='radio'
            name={props.questionsId}
            id='inlineRadio5'
            value='5'
            onClick={handleChange}
            // autocomplete='off'
          />
          <label className='btn btn-outline-primary' for='inlineRadio5'>
            5
          </label>
          {/* </div> */}
          {/* <div className='form-check form-check-inline'> */}
          <input
            className='btn-check '
            type='radio'
            name={props.questionsId}
            id='inlineRadio6'
            value='6'
            onClick={handleChange}
            // autocomplete='off'
          />
          <label className='btn btn-outline-primary' for='inlineRadio6'>
            6
          </label>
          {/* </div> */}
          {/* <div className='form-check form-check-inline'> */}
          <input
            className='btn-check'
            type='radio'
            name={props.questionsId}
            id='inlineRadio7'
            value='7'
            onClick={handleChange}
            // autocomplete='off'
          />
          <label className='btn btn-outline-primary' for='inlineRadio7'>
            7
          </label>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
