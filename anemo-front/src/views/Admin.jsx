import React from 'react';
import List from '../components/admin/List';
import Edit from '../components/admin/Edit';
import Add from '../components/admin/Add';

function Admin() {
  return (
    <div>
      <h2>salut from view admin</h2>
      <List />
      <Edit />
      <Add />
    </div>
  );
}

export default Admin;
