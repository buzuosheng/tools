import React from 'react';
import parser from 'cron-parser';
import dayjs from 'dayjs'
import './index.css'

class Cron extends React.Component<{}, { value: string; arr: string[] }> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: '*/2 * * * *',
      arr: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value })
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      let interval = parser.parseExpression(this.state.value);

      let arr: string[] = []
      for (let i = 0; i < 5; i++) {
        let time = interval.next().toString()
        arr.push(dayjs(time).format('YYYY-MM-DD HH:mm:ss'))
      }
      this.setState({ arr: arr })

    } catch (err) {
      console.log('Error: ' + err.message);
    }

  }

  render() {
    return (
      <div className='cron-container'>
        <div>CRON表达式：
          <input
            className='cron-input'
            value={this.state.value}
            onChange={this.handleChange} />
          <button className='cron-btn' onClick={this.handleClick}>
            点击
        </button>
        </div>
        <h3>程序接下来五次执行的时间</h3>
        <div className='cron-result'>
          <ul className="list-group">
            {this.state.arr.map((date,index) => {
              return (
                <li className='list-group-item' key={index} >{date}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Cron;