import React from 'react'
import { Button, Input } from 'antd'

import './index.css';
const Regex: React.FC = () => {
  return (
    <div>
      <div className='regex_btngroup'>
        常用正则表达式：
        <Button
          type='primary'>
          邮箱
        </Button>
      </div>
      <div className='regex_main'>
        <Input />
      </div>
    </div> 
  )
}

export default Regex