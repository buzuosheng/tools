import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import Helmet from 'react-helmet'

const DateConvert: React.FC = () => {
  return (
    <div className='datec-container'>
      <Helmet>
        <title>时间戳转换 - 前端武器库</title>
        <meta name='description' content='时间戳在线转换' />
        <meta name='keywords' content='时间,时间戳,在线工具,转换' />
      </Helmet>
      <div>当前的时间戳：
        <div>
          {}
        </div>
      <input
          className='datec-input'
          onChange={(e) => {}} />
        <button className='datec-btn' >
          点击
        </button>
      </div>
    </div>
  )
}

export default DateConvert