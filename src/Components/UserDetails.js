import React from 'react'
import {useDispatch} from "react-redux"
import { addUsers } from '../Store/Slices/UserSlices';


const UserDetails = () => {

  const dispatch = useDispatch();

const addUser = (payload)=>{
  dispatch(addUsers(payload));
  // console.log(payload)
}

  return (
    <div>
        <h2>List of Users</h2>
        <input placeholder='Enter user details'/>
        <button onClick={()=> addUser()}>Add User</button> 
        
    </div>
  )
}

export default UserDetails;