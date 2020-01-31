import React from 'react';
import parser from 'cron-parser';
import dayjs from 'dayjs'
import './index.css'

class Cron extends React.Component<{}, { value: string; arr: string[]}> {
  constructor (props: any) {
    super(props)
    this.state = {
      value: '*/2 * * * *',
      arr: []
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
    }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({value: e.target.value})
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      let interval = parser.parseExpression(this.state.value);

      let arr:string[] = []
      for(let i=0; i<5; i++){
        let time = interval.next().toString()
        arr.push(dayjs(time).format('YYYY-MM-DD HH:mm:ss'))
      }
      this.setState({arr:arr})

    } catch (err) {
      console.log('Error: ' + err.message);
    }

  }

  render() {
    return(
      <div className='main'>
        <label className='t'>CRON表达式：
          <input 
                className='cronInput'
                value={this.state.value}
                onChange={this.handleChange} />
          &nbsp;&nbsp;
          <button className='btn' onClick={this.handleClick}>
          点击
        </button>
        </label>
        <h3>程序接下来五次执行的时间</h3>
        <ol className="list-group">
        {this.state.arr.map((date) => {
          return (
              <li className='list-group-item'>{date}</li>
        )})}
        </ol>
      </div>
    )
  }
}

export default Cron;