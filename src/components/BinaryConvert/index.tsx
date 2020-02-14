import React from 'react'
import { useState } from 'react'
import './index.css'
import Helmet from 'react-helmet'
import { Input, Button,Table } from 'antd'

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

  const dataSource = [
    {
      key: '1',
      name: '二进制',
      result: num2
    },
    {
      key: '2',
      name: '八进制',
      result: num8
    },
    {
      key: '3',
      name: '十进制',
      result: num10
    },
    {
      key: '4',
      name: '十六进制',
      result: num16
    },
    {
      key: '5',
      name: '三十六进制',
      result: num36
    },
  ];

  const columns = [
    {
      title: '进制',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '结果',
      dataIndex: 'result',
      key: 'result',
    },
  ];

  return (
    <div className='bc-container'>
      <Helmet>
        <title>进制转换 - 前端武器库</title>
        <meta name='description' content='使用在线工具对数字进行常用的进制转换' />
        <meta name='keywords' content='数字,在线工具,转换,进制' />
      </Helmet>
      <div>输入需要转换的十进制数字：
      <Input
          className='bc_input'
          value={num}
          onChange={(e) => { setNum(e.target.value) }} />
        <Button type='primary' className='bc_btn' onClick={Convert}>
          点击
        </Button>
      </div>
      <h3>进制转换结果表</h3>
      <div className='bc-result'>
        <Table bordered dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    </div>
  )
}

export default BinaryConvert