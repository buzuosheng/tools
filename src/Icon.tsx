import React from 'react'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'

const Icon: React.FC = () => {
  return (
    <Link className='back_home' to='/'>
      <img src={logo} alt='前端武器库'></img>
    </Link>
  )
}
export default Icon