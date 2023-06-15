import React from 'react'

function Buttons() {
    const restart = () => {
        window.location.reload()
    }

    const close = () => {
        window.close()
    }

  return (
    <div>
      <button id='restart' className='buttons' onClick={restart}><img className='imgButtons' src='https://www.clker.com/cliparts/Y/H/e/P/J/b/reset-button-png-hi.png' alt='restart'/></button>
      <button id='closeApp' className='buttons' onClick={close}><img className='imgButtons' src='https://www.freeiconspng.com/thumbs/close-button-png/close-button-png-17.png' alt='close'/></button>
    </div>
  )
}

export default Buttons