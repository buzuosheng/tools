import React from 'react'
import md5 from 'md5'
import './index.css'

class Md5 extends React.Component<{}, {str:string, result:string}>{
  constructor(props:any){
    super(props)
    this.state = { str: '', result:'' }

    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  handleChange(e:React.ChangeEvent<any>){
    this.setState({str: e.target.value})
  }

  handleClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    this.setState({result: md5(this.state.str)})
  }

  render(){
    return(
      <div className='md5-container'>
        <div>
          要加密的字符串：
        </div>
        <div>
          <textarea
            className='cronInput'
            value={this.state.str}
            onChange={this.handleChange}
          />
        </div>
        <button className='btn' onClick={this.handleClick}>
          点击
        </button>
        <h3>加密后的结果为：</h3>
        <div className='result'>{this.state.result}</div>
      </div>
    )
  }
}

export default Md5;