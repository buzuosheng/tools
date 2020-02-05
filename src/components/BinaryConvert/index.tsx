import React from 'react'
import { useState } from 'react'
import './index.css'
import Helmet from 'react-helmet'

const BinaryConvert: React.FC = () => {

  const [num, setNum] = useState('')
  const [num2, setNum2] = useState('')
  const [num8, setNum8] = useState('')
  const [num10, setNum10] = useState('')
  const [num16, setNum16] = useState('')
  const [num36, setNum36] = useState('')

  const Convert = () => {
    if (num) {
      setNum2(parseInt(num).toString(2))
      setNum8(parseInt(num).toString(8))
      setNum10(parseInt(num).toString(10))
      setNum16(parseInt(num).toString(16))
      setNum36(parseInt(num).toString(36))
    }
  }

  return (
    <div className='bc-container'>
      <Helmet>
        <title>进制转换 - 前端武器库</title>
        <meta name='description' content='使用在线工具对数字进行常用的进制转换' />
        <meta name='keywords' content='数字,在线工具,转换,进制'/>
      </Helmet>
      <div>输入需要转换的十进制数字：
      <input
          className='bc-input'
          value={num}
          onChange={(e) => { setNum(e.target.value) }} />
        <button className='bc-btn' onClick={Convert}>
          点击
        </button>
      </div>
      <h3>进制转换结果表</h3>
      <div className='bc-result'>
        <table className='res-tab'>
          <thead>
            <tr>
              <td>进制</td>
              <td>结果</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>二进制</td>
              <td>{num2}</td>
            </tr>
            <tr>
              <td>八进制</td>
              <td>{num8}</td>
            </tr>
            <tr>
              <td>十进制</td>
              <td>{num10}</td>
            </tr>
            <tr>
              <td>十六进制</td>
              <td>{num16}</td>
            </tr>
            <tr>
              <td>三十六进制</td>
              <td>{num36}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BinaryConvert