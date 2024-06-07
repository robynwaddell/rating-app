import React from 'react'
import { FaStar } from 'react-icons/fa';
//I had to google how to get the react icons working
function Star({ selected = false, onClick }) {
  return (
    <FaStar color={selected ? 'gold' : 'grey'} onClick={onClick} />
  )
}

export default Star