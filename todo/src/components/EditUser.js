
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../actions/UserActions.js';



const EditUserForm = ({ userId, initialUserDetails }) => {
  const dispatch = useDispatch();
  const [updatedUser, setUpdatedUser] = useState(initialUserDetails);

  const handleEditUser = () => {
    dispatch(editUser(userId, updatedUser));
    
  };

  return (
    <div>

      <input
        type="text"
        value={updatedUser.name}
        onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
      />
      
      <button onClick={handleEditUser}>Edit User</button>
    </div>
  );
};

export default EditUserForm;
