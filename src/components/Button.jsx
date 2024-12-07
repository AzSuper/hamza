import React from 'react'

const Button = ({title,element}) => {
  return (
    <button className='custome-btn' style={{color:element.color,border: `3px solid ${element.color}`,}}>
        {title}
        <img src="assets/rightArrow.svg" alt="" srcset="" />
    </button>
  )
}

export default Button