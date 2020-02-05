import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'

import Cron from './components/Cron';
import Md5 from './components/Md5'
import MorseCode from './components/MorseCode'
import Home from './components/Home'
import Base64 from './components/Base64'
import BinaryConvert from './components/BinaryConvert'
import DateConvert from './components/DateConvert'

import logo from './logo.jpg'

const Header: React.FC = () => {
  const location = useLocation()

  return (
    <div className="header">
      <Link to='/'>
        <img src={logo} alt='前端武器库'></img>
      </Link>
      <Link to='/' className={location.pathname === '/' ? 'active' : ''}>首页</Link>
      <Link to='/cron' className={location.pathname === '/cron' ? 'active' : ''}>Cron</Link>
      <Link to='/Md5' className={location.pathname === '/Md5' ? 'active' : ''}>MD5</Link>
      <Link to='MorseCode' className={location.pathname === '/MorseCode' ? 'active' : ''}>摩尔斯电码</Link>
      <Link to='Base64' className={location.pathname === '/Base64' ? 'active' : ''}>Base64</Link>
      <Link to='BinaryConvert' className={location.pathname === '/BinaryConvert' ? 'active' : ''}>进制转换</Link>
      <Link to='DateConvert' className={location.pathname === '/DateConvert' ? 'active' : ''}>时间戳转换</Link>
    </div>
  )
}

const App: React.FC = () => {
  console.log(window.location.pathname)

  return (
    <div className='App main'>
      <Router>
        <Header></Header>
        <Route path='/' exact component={Home} />
        <Route path='/cron' component={Cron} />
        <Route path='/md5' component={Md5} />
        <Route path='/MorseCode' component={MorseCode} />
        <Route path='/Base64' component={Base64} />
        <Route path='/BinaryConvert' component={BinaryConvert} />
        <Route path='/DateConvert' component={DateConvert} />
      </Router>
    </div>
  )
}

export default App;
