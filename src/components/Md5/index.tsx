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

  handleChange(e:React.ChangeEvent<HTMLInputElement>){
    this.setState({str: e.target.value})
  }

  handleClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    this.setState({result: md5(this.state.str)})
  }

  render(){
    return(
      <div className='main'>
        <label className='t'>要加密的字符串：
          <input 
                className='cronInput'
                value={this.state.str}
                onChange={this.handleChange} />
          &nbsp;&nbsp;
          <button className='btn' onClick={this.handleClick}>
          点击
          </button>
        </label>
        <h3>加密后的结果为：</h3>
        <label className='result'>{this.state.result}</label>
      </div>
    )
  }
}

export default Md5;