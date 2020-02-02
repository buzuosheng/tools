import React from 'react'
import { useState } from 'react'
import './index.css'
import base64 from 'base64-js'

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


  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  const res = Uint8ArrayToString(base64.toByteArray(Uint8ArrayToString(stringToUint8Array(result))))

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
      <button className='base64-btn' onClick={() => setResult(base64.fromByteArray(stringToUint8Array(code)))}>
        编码
      </button>
      <button className='base64-btn' onClick={() => setCode(res)}>
        解码
      </button>
      <h3>加密后的结果为：</h3>
      <div>
        <textarea 
          value={result}
          onChange={(e) => { setResult(e.target.value)}}
         />
      </div>
    </div>
  )
}

export default Base64;