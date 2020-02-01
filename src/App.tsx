import React from 'react'
import './App.css';
import Cron from './components/Cron';
import Md5 from './components/Md5'
import MorseCode from './components/MorseCode'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className='App main'>
      <Router>
        <div className="header">
          <Link to='/'>首页</Link>
          <Link to='/cron'>Cron</Link>
          <Link to='/md5'>MD5</Link>
          <Link to='/MorseCode'>MorseCode</Link>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/cron' component={Cron} />
        <Route path='/md5' component={Md5} />
        <Route path='/MorseCode' component={MorseCode} />
      </Router>
    </div>
  )
}

export default App;
