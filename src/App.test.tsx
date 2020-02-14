import React from 'react';
import {Table} from 'antd'
import 'antd/dist/antd.css'

const Test:React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: '二进制',
      result: 'num2'
    },
    {
      key: '2',
      name: '八进制',
      result: 'num8'
    },
    {
      key: '3',
      name: '十进制',
      result: 'num10'
    },
    {
      key: '4',
      name: '十六进制',
      result: 'num16'
    },
    {
      key: '5',
      name: '三十六进制',
      result: 'num36'
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
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Test