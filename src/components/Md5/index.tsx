import React from 'react'
import { useState } from 'react'
import md5 from 'md5'
import './index.css'
import Helmet from 'react-helmet'
import {Input,Button} from 'antd'

const Md5: React.FC = () => {
  const { TextArea } = Input

  const [str, setStr] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className='md5-container'> 
      <Helmet>
        <title>MD5文字加密 - 前端武器库</title>
        <meta name='description' content='MD5工具文字在线加密'/>
        <meta name='keywords' content='MD5,在线工具,文字,加密,前端'/>
      </Helmet>
      <div>
        <h3>要加密的字符串：</h3>
      </div>
      <div>
        <TextArea
          value={str}
          onChange={ (e) => {setStr(e.target.value)}}
        />
      </div>
      <Button type='primary' className='md5_btn' onClick={ () => setResult(md5(str))}>
        点击
      </Button>
      <h3>加密后的结果为：</h3>
      <div>
        <TextArea value={result} />
      </div>
    </div>
  )
}

export default Md5