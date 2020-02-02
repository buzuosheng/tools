import React from 'react'
import { useState } from 'react'
import md5 from 'md5'
import './index.css'

const Md5: React.FC = () => {

  const [str, setStr] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className='md5-container'> 
      <div>
        要加密的字符串：
    </div>
      <div>
        <textarea
          value={str}
          onChange={ (e) => {setStr(e.target.value)}}
        />
      </div>
      <button className='md5-btn' onClick={ () => setResult(md5(str))}>
        点击
    </button>
      <h3>加密后的结果为：</h3>
      <div className='md5-result'>{result}</div>
    </div>
  )
}

export default Md5