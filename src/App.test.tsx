import React from 'react'
import axios from 'axios'
import { Input, Button, Table } from 'antd'
import { useState, useEffect } from 'react'

import './index.css'
//淘宝api http://ip.taobao.com/service/getIpInfo.php?ip=
//测试ip  111.53.146.205
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

  const [ip, setIp] = useState('111.53.146.205')
  const [add, setAdd] = useState('')
  const [org, setOrg] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [ipres, setIpres] = useState('')


  const getData = async () => {
    const response = await axios.get('http://ip.taobao.com/service/getIpInfo.php?ip=' + ip )
    console.log(response.data)
    // setIpres(response.data.query)
    // setAdd(response.data.country + ' ' + response.data.regionName)
    // setOrg(response.data.org)
    // setLat(response.data.lat)
    // setLon(response.data.lon)
  }

  // const handleGetData = async () => {
  //   const response = await axios.get('http://ip-api.com/json/' + ip + '?lang=zh-CN')
  //   setIpres(response.data.query)
  //   setAdd(response.data.country + ' ' + response.data.regionName)
  //   setOrg(response.data.org)
  //   setLat(response.data.lat)
  //   setLon(response.data.lon)
  // }


  useEffect(
    () => {
      getData()
    }, []
  )

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
        // onClick={handleGetData}
        className='ipsearch_btn'>
        查询
      </Button>
      <div className='ipsearch_result'>
        {ip}<hr/>
        {add}<hr/>
        {org}<hr/>
        {lat}<hr/>
        {lon}<hr/>
        {ipres}<hr/>
      </div>
    </div>
  )
}

export default IpSearch