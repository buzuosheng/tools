import React from 'react'
import { useState,useEffect } from 'react'
import dayjs from 'dayjs'
import { Helmet } from 'react-helmet'
import {Button, Input} from 'antd';
import './index.css'


const DateConvert: React.FC = () => {

  const [now, setNow] = useState(new Date())
  const [date, setDate] = useState('')
  const [dateRes, setDateRes] = useState('')
  const [time, setTime] = useState('')
  const [timeRes, setTimeRes] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date())
    }, 1000)
  })

  return (
    <div className='datec-container'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      <Helmet>
        <title>时间戳转换 - 前端武器库</title>
        <meta name='description' content='时间戳在线转换' />
        <meta name='keywords' content='时间,时间戳,在线工具,转换' />
      </Helmet>
      <div>
        <div className='now-time'>
        当前的时间戳(秒)：{ Math.round(now.getTime() / 1000) }
        </div>
        <div className='now-time'>
        当前的北京时间：{ dayjs(now).format('YYYY-MM-DD HH:mm:ss') }
        </div>
        <div className='date-wrap'>
          时间戳(s)：
          <Input
            className='day_input'
            value={date}
            onChange={(e) => setDate(e.target.value) }
          />
          <Button
            type='primary'
            className='toDate_btn' 
            onClick={ () => setDateRes(date) }
          >
            转换
          </Button>
          <div 
            className='date-result'>
            {date ? dayjs(new Date(parseInt(dateRes) * 1000)).format('YYYY-MM-DD HH:mm:ss') : ''}
          </div>
            北京时间
        </div>
        <div className='date-wrap'>
          北京时间：
          <Input 
            className='date_input' 
            value={time}
            onChange={ (e) => {setTime(e.target.value)}}
          />
          <Button 
            type='primary'
            className='toDay_btn' 
            onClick={() => { setTimeRes(time)} } 
          >转换
          </Button>
          <div 
            className='date-result'>
            {time ? dayjs(new Date(timeRes)).unix() : ''}
          </div>
          时间戳(s)
        </div>
      </div>
    </div>
  )
}

export default DateConvert