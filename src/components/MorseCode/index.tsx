import React from 'react'
import './index.css'
import { useState } from 'react'
const morse = require('morse')

//event:React.MouseEvent<HTMLButtonElement, MouseEvent>

const MorseCode: React.FC = () => {

  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className='morse-container'>
      输入需要转码的字符串：
      <div>
        <textarea value={code} onChange={(e) => { setCode(e.target.value) }} />&nbsp;&nbsp;
      </div>
      <button className='morse-btn' onClick={(e) => { setResult(morse.encode(code)) }} >编码</button>
      <h3>编码后的结果为：</h3>
      <div className='morse-result'>{result}</div>
    </div>
  )
}

export default MorseCode;