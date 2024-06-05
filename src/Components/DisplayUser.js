import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUser = () => {

    const data = useSelector((state)=>state.users)
  return (
    <>
    {data.map((user,id)=>{
        return <li key={id}>
            {user}
        </li>
    })}
    </>
  )
}

export default DisplayUser