import React from 'react'

const ProgressBar = ({ progress, breakpoints }) => {
  const ease = breakpoints.includes(progress) ? 'width 3s ease' : 'width 1s ease-out'
  const styles = {
    container: { 
      backgroundColor: 'lightgray', 
      height: 6,
      borderRadius: 3,
    },
    bar: { 
      height: '100%', 
      width: `${progress}%`, 
      borderRadius: 3,
      backgroundImage: 'linear-gradient(to right, orange, red)',
      transition: ease
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.bar} />
    </div>
  )
}

export default ProgressBar