import React from 'react'
import '../styles/square.css'

export default function Square({value, onClick}) {
  return (
    <div className='square' onClick = {() => onClick()}>{value}</div>
  )
}
