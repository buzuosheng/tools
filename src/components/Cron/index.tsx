import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import './index.css'
import parser from 'cron-parser'

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
      console.log(result)

    } catch (err) {
      console.log('Error: ' + err.message);
    }

  }
  return (
    <div className='cron-container'>
      <div>CRON表达式：
      <input
          className='cron-input'
          value={value}
          onChange={(e) => {setValue(e.target.value)}} />
        <button className='cron-btn' onClick={handleClick}>
          点击
    </button>
      </div>
      <h3>程序接下来五次执行的时间</h3>
      <div className='cron-result'>
        <ul className="list-group">
          {result.map((date, index) => {
            return (
              <li className='list-group-item' key={index} >{date}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Cron