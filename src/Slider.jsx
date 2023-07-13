import React from 'react'

const Slider = ({min, max, value, handleChange, displayValue}) => {
  return (
    <div className='slider-container'>
        <div className="value">{displayValue}</div>
        <input 
        type="range"
        className='slider' 
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        />
    </div>
  )
}

export default Slider