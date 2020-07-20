import React from 'react'
import 'antd/dist/antd.css'
import './App.css';
import WeChat from './WeChat.jpg'
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'

import Cron from './components/Cron';
import Md5 from './components/Md5'
import MorseCode from './components/MorseCode'
import Home from './components/Home'
import Base64 from './components/Base64'
import BinaryConvert from './components/BinaryConvert'
import DateConvert from './components/DateConvert'
import Qrcode from './components/Qrcode'
import Regex from './components/Regex'
import IpSearch from './components/IpSearch'

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
      <Link to='/md5' className={location.pathname === '/md5' ? 'active' : ''}>MD5</Link>
      <Link to='/morsecode' className={location.pathname === '/morsecode' ? 'active' : ''}>摩尔斯电码</Link>
      <Link to='/base64' className={location.pathname === '/base64' ? 'active' : ''}>Base64</Link>
      <Link to='/binaryconvert' className={location.pathname === '/binaryconvert' ? 'active' : ''}>进制转换</Link>
      <Link to='/dateconvert' className={location.pathname === '/dateconvert' ? 'active' : ''}>时间戳转换</Link>
      <Link to='/qrcode' className={location.pathname === '/qrcode' ? 'active' : ''}>二维码生成器</Link>
      <Link to='/regex' className={location.pathname === '/regex' ? 'active' : ''}>正则测试</Link>
      <Link to='/ipsearch' className={location.pathname === '/ipsearch' ? 'active' : ''}>IP地址查询</Link>
    </div>
  )
}

const Footer: React.FC = () => {
  return(
    <div>
      {/* 134123412351 */}
    </div>
  )
}

const App: React.FC = () => {
  console.log(window.location.pathname)

  return (
    <div className='App main'>
      <Router>
        <img className="WeChat" alt="微信公众号-前端大合集" src={WeChat} />
        <Header></Header>
        <Route path='/' exact component={Home} />
        <Route path='/cron' component={Cron} />
        <Route path='/md5' component={Md5} />
        <Route path='/morsecode' component={MorseCode} />
        <Route path='/base64' component={Base64} />
        <Route path='/binaryconvert' component={BinaryConvert} />
        <Route path='/dateconvert' component={DateConvert} />
        <Route path='/qrcode' component={Qrcode} />
        <Route path='/regex' component={Regex} />
        <Route path='/ipsearch' component={IpSearch} />
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App;
