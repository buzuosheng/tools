import React from 'react';
import { InputNumber, Checkbox, Select, Input, Slider } from 'antd';

//logo:https://www.buzuosheng.com/images/hand.jpg
const QrControl: React.FC<{
  valueChange: (value: string) => void,
  renderAsChange: (renderAs: "canvas") => void,
  sizeChange: (size: number) => void,
  bgColorChange: (bgColor: string) => void,
  fgColorChange: (fgColor: string) => void,
  levelChange: (level: "H" | "Q" | "M" | "L") => void,
  ifMarChange: (ifMar: boolean) => void,
  srcChange: (src: string) => void,
  heightChange: (height: number) => void,
  widthChange: (height: number) => void,
  value: string,
  renderAs: "canvas",
  size: number,
  bgColor: string,
  fgColor: string,
  level: "H" | "Q" | "M" | "L",
  ifMar: boolean,
  src: string,
  height: number,
  width: number,
}> = ({
  value,
  renderAs,
  size,
  bgColor,
  fgColor,
  level,
  ifMar,
  src,
  height,
  width,
  valueChange,
  renderAsChange,
  sizeChange,
  bgColorChange,
  fgColorChange,
  levelChange,
  ifMarChange,
  srcChange,
  heightChange,
  widthChange
}) => {
    const { Option } = Select;
    const { TextArea } = Input;


    return (
      <div className='qr_Control'>
        <div className='qr_maintitle'>
          二维码生成器
      </div>
        {/* 渲染模式 renderAs */}
        <div className='qr_ctrlItem'>
          渲染模式：
        <Select
            className='qr_renderAs'
            defaultValue="canvas"
            style={{ width: 80 }}
            value={renderAs}
            onChange={(value: "canvas") => { renderAsChange(value) }}
          >
            <Option value="canvas">canvas</Option>
            <Option value="svg">svg</Option>
          </Select>
        </div>
        {/* 二维码大小 size */}
        <div className='qr_ctrlItem'>
          二维码大小：
        <Slider
            className='qr_logosize'
            defaultValue={200}
            min={100}
            max={400}
            value={size}
          />
        </div>
        {/* 二维码颜色 fgColor */}
        <div className='qr_ctrlItem'>
          二维码颜色：
        <Select
            defaultValue='#000000'
            style={{ width: 80 }}
            value={fgColor}
            onChange={(value: string) => { fgColorChange(value) }}
          >
            <Option value='#000000'>黑色</Option>
            <Option value='#ffffff'>白色</Option>
            <Option value='#ff0000'>红色</Option>
            <Option value='#800000'>紫色</Option>
            <Option value='#008000'>绿色</Option>
            <Option value='#ffff00'>黄色</Option>
            <Option value='#0000ff'>蓝色</Option>
            <Option value='#008080'>青色</Option>
          </Select>
        </div>
        {/* 二维码背景颜色 bgColor */}
        <div className='qr_ctrlItem'>
          二维码背景颜色：
        <Select
            defaultValue='#ffffff'
            style={{ width: 80 }}
            value={bgColor}
            onChange={(value: string) => { bgColorChange(value) }}
          >
            <Option value='#000000'>黑色</Option>
            <Option value='#ffffff'>白色</Option>
            <Option value='#ff0000'>红色</Option>
            <Option value='#800000'>紫色</Option>
            <Option value='#008000'>绿色</Option>
            <Option value='#ffff00'>黄色</Option>
            <Option value='#0000ff'>蓝色</Option>
            <Option value='#008080'>青色</Option>
          </Select>
        </div>
        {/* 内边距 includeMargin */}
        <div className='qr_ctrlItem'>
          是否含有内边距：
        <Checkbox
            checked={ifMar}
            onChange={(e) => { ifMarChange(e.target.checked) }}>
            {ifMar ? '有边距' : '无边距'}
          </Checkbox>
        </div>
        {/* 误差校正水平 level */}
        <div className='qr_ctrlItem'>
          误差校准水平：
        <Select
            defaultValue="H"
            style={{ width: 80 }}
            value={level}
            onChange={(value: "H" | "Q" | "M" | "L") => { levelChange(value) }} >
            <Option value="H">30%</Option>
            <Option value="Q">25%</Option>
            <Option value="M">15%</Option>
            <Option value="L">7%</Option>
          </Select>
        </div>
        {/* 二维码内容 value */}
        <div className='qr_ctrlItem'>
          二维码内容
        <TextArea
            value={value}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { valueChange(event.target.value) }} />
        </div>
        <div className='qr_logotitle'>
          logo控制
      </div>
        {/* 图片路径 src */}
        <div className='qr_ctrlItem'>
          输入图片地址：
        <Input
            value={src}
            className='qr_logoInpput' onChange={(event: React.ChangeEvent<HTMLInputElement>) => { srcChange(event.target.value) }} />
        </div>
        {/* x坐标 x */}
        <div className='qr_ctrlItem'>
          x坐标：
        <InputNumber
          className='qr_logoNumInpput'
          min={0}
          max={10}
          defaultValue={0}
          disabled={true} />
        </div>
        {/* y坐标 y */}
        <div className='qr_ctrlItem'>
          y坐标：
        <InputNumber
          className='qr_logoNumInpput'
          min={0}
          max={10}
          defaultValue={0}
          disabled={true} />
        </div>
        {/* 高度 height */}
        <div className='qr_ctrlItem'>
          高度：
        <Slider
            className='qr_logosize'
            defaultValue={10}
            min={1} max={30}
            value={height}
            onChange={(value) => { if (typeof (value) == 'number') { heightChange(value) } }} />
        </div>
        {/* 宽度 width */}
        <div className='qr_ctrlItem'>
          宽度：
        <Slider
            className='qr_logosize'
            defaultValue={10}
            min={1}
            max={30}
            value={width}
            onChange={(value) => { if (typeof (value) == 'number') { widthChange(value) } }} />
        </div>
      </div>
    )
  }

export default QrControl