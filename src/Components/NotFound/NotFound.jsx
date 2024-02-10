import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
const NotFound = () => {
  return (
    <div className='notfound'>NotFound ! <Link to='/'>Go to main page</Link></div>
  )
}

export default NotFound