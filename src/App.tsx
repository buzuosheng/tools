import React from 'react'
import './App.css';
import Cron from './components/Cron';
import Md5 from './components/Md5'
import MorseCode from './components/MorseCode'
import Home from './components/Home'
import Base64 from './components/Base64'
import BinaryConvert from './components/BinaryConvert'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className='App main'>
      <Router>
        <div className="header">
          <Link to='/'>首页</Link>
          <Link to='/cron'>Cron</Link>
          <Link to='/Md5'>MD5</Link>
          <Link to='MorseCode'>MorseCode</Link>
          <Link to='Base64'>Base64</Link>
          <Link to='BinaryConvert'>进制转换</Link>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/cron' component={Cron} />
        <Route path='/md5' component={Md5} />
        <Route path='/MorseCode' component={MorseCode} />
        <Route path='/Base64' component={Base64} />
        <Route path='/BinaryConvert' component={BinaryConvert} />
      </Router>
    </div>
  )
}

export default App;
