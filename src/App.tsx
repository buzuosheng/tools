import React from 'react'
import './App.css';
import Cron from './components/Cron';
import Md5 from './components/Md5'
import MorseCode from './components/MorseCode'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>root</Link>&nbsp;
        <Link to='/cron'>Cron</Link>&nbsp;
        <Link to='/md5'>MD5</Link>&nbsp;
        <Link to='/MorseCode'>MorseCode</Link>&nbsp;
        <div>
          <Route path='/' exact render={() => {return <div>root page</div>} } />
          <Route path='/cron' component={Cron} />
          <Route path='/md5' component={Md5} />
          <Route path='/MorseCode' component={MorseCode} />
        </div>
      </Router>
    </div>
  )
}

export default App;
