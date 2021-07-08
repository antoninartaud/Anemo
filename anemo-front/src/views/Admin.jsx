import React from 'react';
import { Link } from 'react-router-dom';

import List from '../components/admin/List';
import Edit from './Edit';
import Add from './Add';

function Admin() {
  return (
    <div>
      <h3>Admin</h3>
      <Link to='/add'>
        <button>Add</button>
      </Link>
      <List />
    </div>
  );
}

export default Admin;
