import React from 'react'
import { useState } from 'react'
import base64 from 'base64-js'
import { Helmet } from 'react-helmet'
import { Button, Input } from 'antd';

import './index.css'

const stringToUint8Array = (str:string) => {
  const arr = Array.from(str, char => char.charCodeAt(0))

  const tmpUint8Array = new Uint8Array(arr);
  return tmpUint8Array

}

function Uint8ArrayToString(fileData:Uint8Array){
  let dataString = "";
  for (let i = 0; i < fileData.length; i++) {
    dataString += String.fromCharCode(fileData[i]);
  }
 
  return dataString
}

// const sToUInt8 = (str:string) => {
//   const arr:number[] = [];
//   const newstr = str.split('')
//   newstr.map(
//     (item, index) => {
//       arr.push(item.charCodeAt(index))
//     }
//   )
// }

const Base64: React.FC = () => {
  const { TextArea } = Input

  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  const res = Uint8ArrayToString(base64.toByteArray(Uint8ArrayToString(stringToUint8Array(result))))

  return (
    <div className='base64-container'>
      <Helmet>
        <title>文字base64转码 - 前端武器库</title>
        <meta name='description' content='使用Base64对文字在线转码解码' />
        <meta name='keywords' content='文字,在线工具,转码,解码,前端' />
      </Helmet>
      <h3>要加密的字符串：</h3>
      <div>
        <TextArea
          className='base64_input'
          value={code}
          onChange={(e) => { setCode(e.target.value) }}
        />
      </div>
      <Button type='primary' className='base64_btn' onClick={() => setResult(base64.fromByteArray(stringToUint8Array(code)))}>
        编码
      </Button>
      <Button type='primary' className='base64_btn' onClick={() => setCode(res)}>
        解码
      </Button>
      <h3>加密后的结果为：</h3>
      <div>
        <TextArea 
          className='base64_input'
          value={result}
          onChange={(e) => { setResult(e.target.value)}}
         />
      </div>
    </div>
  )
}

export default Base64;