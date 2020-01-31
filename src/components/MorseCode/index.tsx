import React from 'react'
import './index.css'
import { useState }from 'react'
const morse = require('morse')

//event:React.MouseEvent<HTMLButtonElement, MouseEvent>

const MorseCode: React.FC = () => {

  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  return(
    <div className='main'>
      <label className='t'>输入需要转码的字符串：
        <input type='text' value={code} onChange={ (e) => {setCode(e.target.value)}} />&nbsp;&nbsp;
        <button className='btn' onClick={(e) => { setResult(morse.encode(code)) }} >编码</button>
      </label>
      <h3>编码后的结果为：</h3>
      <label className='result'>{result}</label>
    </div>
  )
}

export default MorseCode;