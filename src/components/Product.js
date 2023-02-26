import React from 'react'

const Coin = ({name, symbol, imgSrc, price}) => {
  return (
    <div className='coin'>
      <img src={imgSrc} alt={name}/>
      <h3>{symbol}</h3>
      <div>{name}</div>
      <div>₹{price}</div>
    </div>
  )
}

export default Coin;