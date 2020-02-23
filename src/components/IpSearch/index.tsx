import React from 'react'
import axios from 'axios'
import { Input, Button, Table } from 'antd'
import { useState, useEffect } from 'react'

import './index.css'

const IpSearch: React.FC = () => {

  const ipToNum = (ip: string) => {
    if (ip) {
      const n = ip.split('.')
      const num = parseInt(n[0]) * 256 * 256 * 256 +
        parseInt(n[1]) * 256 * 256 +
        parseInt(n[2]) * 256 +
        parseInt(n[3])
      return num
    }
  }

  const [ip, setIp] = useState('')
  const [add, setAdd] = useState('')
  const [org, setOrg] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [ipres, setIpres] = useState('')


  const getData = async () => {
    const response = await axios.get('https://ip-api.com/json/?lang=zh-CN')
    setIpres(response.data.query)
    setAdd(response.data.country + ' ' + response.data.regionName)
    setOrg(response.data.org)
    setLat(response.data.lat)
    setLon(response.data.lon)
  }

  const handleGetData = async () => {
    const response = await axios.get('https://ip-api.com/json/' + ip + '?lang=zh-CN')
    setIpres(response.data.query)
    setAdd(response.data.country + ' ' + response.data.regionName)
    setOrg(response.data.org)
    setLat(response.data.lat)
    setLon(response.data.lon)
  }


  useEffect(
    () => {
      getData()
    }, []
  )


  const data = [
    {
      key: '1',
      search: 'IP地址',
      result: ipres,
    },
    {
      key: '2',
      search: '整型',
      result: ipToNum(ipres)
    },
    {
      key: '3',
      search: 'ip-api查询归属地',
      result: add
    },
    {
      key: '4',
      search: 'org',
      result: org
    },
    {
      key: '5',
      search: '经度lon',
      result: lon
    },
    {
      key: '6',
      search: '纬度lat',
      result: lat
    }

  ]
  const columns = [
    {
      title: '',
      dataIndex: 'search',
      key: 'search',
      width: 100
    },
    {
      title: '结果',
      dataIndex: 'result',
      key: 'result',
      width: 100
    }
  ]
  return (
    <div className='ipsearch_main'>
      请输入需要查询的IP地址：
      <Input
        value={ip}
        onChange={(e) => { setIp(e.target.value) }}
        className='ipsearch_input'
      />
      <Button
        type='primary'
        onClick={handleGetData}
        className='ipsearch_btn'>
        查询
      </Button>
      <div className='ipsearch_result'>
        <Table
          bordered
          columns={columns}
          pagination={false}
          dataSource={data} />
      </div>
    </div>
  )
}

export default IpSearch