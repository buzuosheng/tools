import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import parser from 'cron-parser'
import Helmet from 'react-helmet'
import { Button, Input, List } from 'antd'

import './index.css'

const Cron: React.FC = () => {

  const init: string[] = []
  const [value, setValue] = useState('*/2 * * * *')
  const [result, setResult] = useState(init)

  const handleClick = () => {
    try {
      let interval = parser.parseExpression(value);

      let arr: string[] = []
      for (let i = 0; i < 5; i++) {
        let time = interval.next().toString()
        arr.push(dayjs(time).format('YYYY-MM-DD HH:mm:ss'))
      }
      setResult(arr)

    } catch (err) {
      console.log('Error: ' + err.message);
    }

  }
  return (
    <div className='cron-container'>
      <Helmet>
        <title>crontab时间计算 - 前端武器库</title>
        <meta name="description" content="计算定时任务的执行时间" />
        <meta name='keywords' content="工具,cron,crontab,定时,执行时间,前端,在线" />>
      </Helmet>
      <div>CRON表达式：
        <Input className='cron_input' value={value} onChange={(e) => setValue(e.target.value)} />
        <Button type='primary' className='cron_btn' onClick={handleClick}>
          点击
        </Button>
      </div>
      <div className='cron-result'>
        <List
          header={<div>接下来五次的执行时间</div>}
          bordered
          dataSource={result}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>

    </div>
  )
}

export default Cron