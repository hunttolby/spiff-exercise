import React from 'react'

const ProgressBar = ({ progress }) => {
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
      transition: 'width 1s ease-out'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.bar} />
    </div>
  )
}

export default ProgressBar