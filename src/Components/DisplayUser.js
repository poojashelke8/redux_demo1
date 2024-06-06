import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers } from '../Store/Slices/UserSlices'

const DisplayUser = () => {

    const data = useSelector((state)=>state.users)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
      dispatch(deleteUsers(id))
    }
  return (
    <>
    {data.map((user,id)=>(
        <li key={id}>
            {user} <button onClick={()=> handleDelete(id)}>Delete</button>
        </li>
    ))}
    </>
  )
}

export default DisplayUser