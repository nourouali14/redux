
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/UserActions.js';


const AddUserForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
   
  });

  const handleAddUser = () => {
    dispatch(addUser(newUser));
  
    setNewUser({
      name: '',
      email: '',
      
    });
  };

  return (
    <div>
      
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
   
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUserForm;
