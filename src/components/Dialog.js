import React from 'react'

function Dialog({onClose}) {
  return (
    <div className="dialog">
    <p>Thank you for rating!</p>
    <p>Come back soon!</p>
    <button onClick={onClose}>Close</button>
  </div>
  )
}

export default Dialog
