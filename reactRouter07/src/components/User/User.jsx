import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {id}=useParams()
  return (
    <div className='p-4 text-3xl text-white bg-gray-600'>
      User:{id}
    </div>
  )
}

export default User
