import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './views/Admin';
import Add from './views/Add';
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/edit/:id' component={Edit} />
          <Route exact path='/add' component={Add} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
