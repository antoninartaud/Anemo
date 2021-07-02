import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'styled-components'
import NavBar from '../src/components/nav/NavBar';
// import Form from './components/Modal/Form';
// import HomePage from './views/HomePage';


const App = () => {
  return (
    <div>
      {/* <Form/> */}
      {/* <HomePage/> */}
      <NavBar/>
    </div>
  );
}

export default App;



