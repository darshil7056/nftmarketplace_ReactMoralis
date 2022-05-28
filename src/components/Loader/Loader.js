import React from 'react'
import './Loader.css'

export const Loader = () => {
  return (
    <div className='loader'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h5>Please Wait..</h5>
    </div>
  )
}
