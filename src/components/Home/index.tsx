import React from 'react'
import { Link } from 'react-router-dom';

import './index.css'

const Home: React.FC = () => {

  return (
    <div className='home'>
      <div className="list">
        <div className="item">
          <Link to='/cron'>Cron</Link>
        </div>
        <Link to='/md5'>md5加密</Link>
        <Link to='/MorseCode'>MorseCode</Link>
      </div>
    </div>
  )
}

export default Home;