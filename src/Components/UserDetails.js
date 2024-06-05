import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addUsers } from '../Store/Slices/UserSlices';
import DisplayUser from './DisplayUser';


const UserDetails = () => {

  const [userDet,setUserDet] = useState("")

  const handleInput = (e)=>{
    setUserDet(e.target.value)
  }

  const dispatch = useDispatch();

// const addUser = (payload)=>{
//   dispatch(addUsers(payload));
//   setUserDet("")
//   // console.log(payload)
// }

const addUser = () => {
  if (userDet) {
    dispatch(addUsers(userDet));
    setUserDet(''); // Clear input field after adding user
  }
};

  return (
    <div>
        <h2>List of Users</h2>
        <input placeholder='Enter user details'
        value={userDet}
        onChange={handleInput}/>
        <button onClick={()=> addUser}>Add User</button> 
        <ul>
          <DisplayUser/>
        </ul>
        {/* <DisplayUser/> */}
    </div>
  )
}

export default UserDetails;