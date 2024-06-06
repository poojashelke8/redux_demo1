import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addUsers, deleteAll } from '../Store/Slices/UserSlices';
import DisplayUser from './DisplayUser';


const UserDetails = () => {

  const [userDet, setUserDet] = useState("")

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setUserDet(e.target.value)
  }

  const addUser = () => {
    if (userDet) {
      console.log("Dispatching", userDet);
      dispatch(addUsers(userDet));
      setUserDet('');
    } else {
      console.log("No data")
    }
  };

  const removeAll = ()=>{
    dispatch(deleteAll());
  }

  return (
    <div>
      <h2>List of Users</h2>
      <input
        placeholder='Enter user details'
        value={userDet}
        onChange={handleInput}
      />
      <button onClick={addUser}>Add User</button>
      <button onClick={removeAll}>Delete All</button>
      <DisplayUser />
    </div>
  )
}


export default UserDetails;