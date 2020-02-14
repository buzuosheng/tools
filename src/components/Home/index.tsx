import React from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import cron from './image/cron.jpg'
import md5 from './image/md5.jpg'
import morse from './image/morse.jpg'
import base64 from './image/base64.jpg'
import binaryc from './image/binaryc.jpg'
import dateconvert from './image/dateconvert.jpg'
import qrcode from './image/qrcode.jpg';

import './index.css'


const Home: React.FC = () => {

  return (
    <div className='home'>
      <Helmet>
        <title>前端武器库</title>
        <meta name='description' content='前端在线工具库'/>
        <meta name='keywords' content='前端,工具库,工具,在线' />
      </Helmet>
      <div className="list">
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/cron'>
              <img src={cron} alt='cron' />
              <h3>crontab时间计算</h3>
            </Link>
          </div>
          <div className='tool-info'>
            crontab时间测试，执行时间计算
          </div>
          <div className='tool-url'>
            <Link to='/cron'>https://wuqiku.netlify.com/cron</Link>
          </div>
        </div>
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/md5'>
              <img src={md5} alt='md5' />
              <h3>MD5编码</h3>
            </Link>
          </div>
          <div className='tool-info'>
            将文字使用MD5加密
          </div>
          <div className='tool-url'>
            <Link to='/md5'>https://wuqiku.netlify.com/md5</Link>
          </div>
        </div>
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/morsecode'>
              <img src={morse} alt='morse' />
              <h3>摩尔斯电码</h3>
            </Link>
          </div>
          <div className='tool-info'>
            将文字信息转换成摩尔斯电码
          </div>
          <div className='tool-url'>
            <Link to='/morsecode'>https://wuqiku.netlify.com/NorseCode</Link>
          </div>
        </div>
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/base64'>
              <img src={base64} alt='base64' />
              <h3>Base64转码解码</h3>
            </Link>
          </div>
          <div className='tool-info'>
            将文字使用Base64转码解码
          </div>
          <div className='tool-url'>
            <Link to='/base64'>https://wuqiku.netlify.com/Base64</Link>
          </div>
        </div>
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/binaryconvert'>
              <img src={binaryc} alt='进制转换' />
              <h3>常用进制转换</h3>
            </Link>
          </div>
          <div className='tool-info'>
            常用的进制转换工具
          </div>
          <div className='tool-url'>
            <Link to='/binaryconvert'>https://wuqiku.netlify.com/BinaryConvert</Link>
          </div>
        </div>
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/dateconvert'>
              <img src={dateconvert} alt='时间戳在线转换' />
              <h3>时间戳转换</h3>
            </Link>
          </div>
          <div className='tool-info'>
            在线转换时间戳
          </div>
          <div className='tool-url'>
            <Link to='/dateconvert'>https://wuqiku.netlify.com/DateConvert</Link>
          </div>
        </div>
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/qrcode'>
              <img src={qrcode} alt='生成二维码条形码' />
              <h3>在线生成二维码</h3>
            </Link>
          </div>
          <div className='tool-info'>
            在线生成二维码，文字网址等
          </div>
          <div className='tool-url'>
            <Link to='/qrcode'>https://wuqiku.netlify.com/</Link>
          </div>
        </div>
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to='/'>
              <img src={cron} alt='8' />
              <h3>第八个工具</h3>
            </Link>
          </div>
          <div className='tool-info'>
            第八个工具
          </div>
          <div className='tool-url'>
            <Link to='/'>https://wuqiku.netlify.com/</Link>
          </div>
        </div>
        <div className="tool">
        <div className='tool-name'>
          <Link className='tool-icon' to='/'>
            <img src={cron} alt='9' />
            <h3>第九个工具</h3>
          </Link>
        </div>
        <div className='tool-info'>
          第九个工具
        </div>
        <div className='tool-url'>
          <Link to='/'>https://wuqiku.netlify.com/</Link>
        </div>
      </div>


      </div>
    </div>
  )
}

export default Home;

/*
        <div className="tool">
          <div className='tool-name'>
            <Link className='tool-icon' to=/>
              <img src={} alt='' />
              <h3></h3>
            </Link>
          </div>
          <div className='tool-info'>

          </div>
          <div className='tool-url'>
            <Link to=/>https://wuqiku.netlify.com/</Link>
          </div>
        </div>
*/