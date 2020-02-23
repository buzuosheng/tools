import React from 'react'
import { Button, Input } from 'antd'
import { useState } from 'react'

import './index.css';
const Regex: React.FC = () => {

  const { TextArea } = Input
  const [reg, setReg] = useState('')
  return (
    <div>
      <div className='regex_btngroup'>
        常用正则表达式：
        {/* 邮箱正则 */}
        <Button
          className='regex_btn'
          onClick={() => { setReg('\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}') }}
          type='primary'>
          邮箱
        </Button>
        {/* 中文正则 */}
        <Button
          className='regex_btn'
          type='primary'
          onClick={() => { setReg('[\\u4e00-\\u9fa5]+') }}
        >
          中文
        </Button>
        {/* 双字节 */}
        <Button
          className='regex_btn'
          onClick={() => { setReg('[^\\x00-\\xff]+') }}
          type='primary'
        >
          双字节字符
        </Button>
        {/* 时间正则 */}
        <Button
          className='regex_btn'
          onClick={() => { setReg('([01]?\\d|2[0-3]):[0-5]?\\d:[0-5]?\\d') }}
          type='primary'>
          时间
        </Button>
        {/* IP地址 */}
        <Button
          className='regex_btn'
          onClick={() => { setReg('\\d{0,3}\\.\\d{0,3}\\.\\d{0,3}\\.\\d{0,3}') }}
          type='primary'>
          IP地址
        </Button>
        {/* 身份证 */}
        <Button
          className='regex_btn'
          type='primary'
          onClick={() => { setReg('\\d{17}[\\d|x]|\\d{15}') }}>
          身份证
        </Button>
        {/* 正整数 */}
        <Button
          className='regex_btn'
          onClick={() => { setReg('[1-9]\\d*') }}
          type='primary'>
          正整数
        </Button>
        {/* 负整数 */}
        <Button
          className='regex_btn'
          type='primary'
          onClick={() => { setReg('-[1-9]\\d*') }}>
          负整数
        </Button>
        {/* 手机号 */}
        <Button
          className='regex_btn'
          type='primary'
          onClick={() => { setReg('(13\\d|14[579]|15[^4\\D]|17[^49\\D]|18\\d)\\d{8}') }}>
          手机号
        </Button>
        {/* 空白行 */}
        <Button
          className='regex_btn'
          type='primary'
          onClick={() => {setReg('\\s')}}>
          空白行
        </Button>
      </div>
      <div className='regex_main'>
        <TextArea
          className='regex_regInput'
          value={reg}
          onChange={(e) => setReg(e.target.value)} />
      </div>
    </div>
  )
}

export default Regex