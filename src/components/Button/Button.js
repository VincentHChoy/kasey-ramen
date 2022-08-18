import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <button className='button' type={props.type}>
      {props.desc}
      </button>
  )
}

export default Button