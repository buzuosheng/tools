import React from 'react';
import QRCode from 'qrcode.react'
import { Button } from 'antd'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

import './index.css';
import QrControl from './QrControl'

// logo 'https://www.buzuosheng.com/images/hand.jpg'
const Qrcode: React.FC = () => {

  const [value, setValue] = useState('https://wuqiku.buzuosheng.com')
  const [renderAs, setRenderAs] = useState<"canvas">('canvas')
  const [size, setSize] = useState(200)
  const [bgColor, setBgColor] = useState('#ffffff')
  const [fgColor, setFgColor] = useState('#000000')
  const [level, setLevel] = useState<"H" | "Q" | "M" | "L">('H')
  const [ifMar, setIfMar] = useState(false)
  const [src, setSrc] = useState('')
  const [height, setHeight] = useState(10)
  const [width, setWidth] = useState(10)

  const handleClear = () => {
    setValue('https://wuqiku.buzuosheng.com');
    setRenderAs('canvas');
    setSize(200);
    setFgColor('#ffffff');
    setBgColor('#000000');
    setLevel('H');
    setIfMar(false);
    setSrc('');
    setHeight(10);
    setWidth(10);
  }

  return (
    <div className='qr_main'>
      <Helmet>
        <title>在线生成二维码 - 前端武器库</title>
        <meta name='description' content='在线生成二维码' />
        <meta name='keywords' content='在线,在线工具,转码,二维码,前端,加密' />
      </Helmet>
      <QrControl
        value={value}
        renderAs={renderAs}
        size={size}
        bgColor={bgColor}
        fgColor={fgColor}
        level={level}
        ifMar={ifMar}
        src={src}
        height={height}
        width={width}
        valueChange={(value) => { setValue(value) }}
        renderAsChange={(renderAs) => { setRenderAs(renderAs) }}
        sizeChange={(size) => { setSize(size) }}
        bgColorChange={(bgColor) => { setBgColor(bgColor) }}
        fgColorChange={(fgColor) => { setFgColor(fgColor) }}
        ifMarChange={(ifMar) => { setIfMar(ifMar) }}
        levelChange={(level) => { setLevel(level) }}
        srcChange={(src) => { setSrc(src) }}
        heightChange={(height) => { setHeight(height) }}
        widthChange={(width) => { setWidth(width) }}
      />
      <div className='qr_result'>
        <div className='qr_resultCode'>
          <QRCode
            value={value}
            renderAs={renderAs}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level={level}
            includeMargin={ifMar}
            imageSettings={{
              src: src,
              width: width / 100 * size,
              height: height / 100 * size
            }} />
        </div>
        <div>
          <Button
            className='qr_dloadbtn'
            type="primary"
            icon="download"
            disabled={true}>
          </Button>
          <Button
            className='qr_clearbtn'
            danger
            ghost
            onClick={handleClear}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Qrcode;