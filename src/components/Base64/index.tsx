import React from 'react'
import { useState } from 'react'
import './index.css'
const base64 = require('Base64')

const Base64: React.FC = () => {

  const [code, setCode] = useState('')
  const [result, setResult] = useState('')
  const btoa = base64.btoa;
  const atob = base64.atob;

  return (
    <div className='base64-container'>
      <div>
        要加密的字符串：
      </div>
      <div>
        <textarea
          value={code}
          onChange={(e) => { setCode(e.target.value) }}
        />
      </div>
      <button className='base64-btn' onClick={() => setResult(atob(code))}>
        编码
      </button>
      <button className='base64-btn' onClick={() => setCode(btoa(result))}>
        解码
      </button>
      <h3>加密后的结果为：</h3>
      <div className='base64-result'>{result}</div>
    </div>
  )
}

export default Base64;