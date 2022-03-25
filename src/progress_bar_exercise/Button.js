import React, { useState } from 'react'
import {
  BUTTON_STATE_DEFAULT,
  BUTTON_STATE_HOVER,
  BUTTON_STATE_CLICKED,
  BUTTON_TYPES_START,
  BUTTON_TYPES_FINISH
} from './constants'

const Button = ({ children, buttonType, loading, onClick }) => {
  const [currButtonState, setCurrButtonState] = useState(BUTTON_STATE_DEFAULT)

  const buttonTypes = {
    [BUTTON_TYPES_START]: {
      color: '#49ca49'
    },
    [BUTTON_TYPES_FINISH]: {
      color: '#ca4949'
    }
  }

  const shadowStates = {
    [BUTTON_STATE_DEFAULT]: `inset 0px 0px 0px 1px ${buttonTypes[buttonType].color}`,
    [BUTTON_STATE_HOVER]: `inset 0px 0px 0px 2px ${buttonTypes[buttonType].color}`,
    [BUTTON_STATE_CLICKED]: `inset 0px 0px 0px 3px ${buttonTypes[buttonType].color}`
  }

  const styles = {
    button: { 
      borderRadius: 24, 
      boxShadow: shadowStates[currButtonState], 
      minWidth: 160,
    },
    text: { 
      margin: '12px 16px', 
      textTransform: 'uppercase', 
      color: buttonTypes[buttonType].color, 
      fontWeight: 600
    }
  }

  return (
    <button 
      style={styles.button} 
      onMouseEnter={() => setCurrButtonState(BUTTON_STATE_HOVER)} 
      onMouseLeave={() => setCurrButtonState(BUTTON_STATE_DEFAULT)}
      onMouseDown={() => setCurrButtonState(BUTTON_STATE_CLICKED)}
      onMouseUp={() => setCurrButtonState(BUTTON_STATE_DEFAULT)}
      onClick={onClick}
    >
      <div
        style={styles.text}
      >
        {loading ? <p>Loading...</p> : children}
      </div>
    </button>
  )
}

Button.defaultProps = {
  buttonType: 'start',
  onClick: () => {},
  loading: false,
}

export default Button