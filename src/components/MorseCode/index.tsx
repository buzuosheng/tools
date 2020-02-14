import React from 'react'
import './index.css'
import { useState } from 'react'
import {Input, Button} from 'antd'
import Helmet from 'react-helmet'
const morse = require('morse')

//event:React.MouseEvent<HTMLButtonElement, MouseEvent>

const MorseCode: React.FC = () => {
  const {TextArea} = Input

  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className='morse-container'>
      <Helmet>
        <title>摩斯电码 - 前端武器库</title>
        <meta name='description' content='摩斯电码在线转码解码' />
        <meta name='keywords' content='莫斯,摩尔斯,电码,转码,解码,文字,密码,转换' />
      </Helmet>
      <h3>输入需要转码的字符串：</h3>
      <div>
        <TextArea value={code} onChange={(e) => { setCode(e.target.value) }} />
      </div>
      <Button type='primary' className='morse_btn' onClick={(e) => { setResult(morse.encode(code)) }} >编码</Button>
      <h3>编码后的结果为：</h3>
      <div className='morse-result'>{result}</div>
    </div>
  )
}

export default MorseCode;