import React, { useState, useEffect } from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [simulate, setSimulate] = useState(false)
  const [hideBar, setHideBar] = useState(false)

  // target progress out of 100 to simulate
  const targetSimulatedProgress = 90

  const handleSimulation = () => {
    setSimulate(true)
  }

  const handleStartRequest = () => {
    handleSimulation()
    setLoading(true)
  }

  const handleFinishRequest = () => {
    setProgress(100)
    setLoading(false)
    setTimeout(() => {
      setHideBar(true)
    }, 3000)
  }

  useEffect(() => {
    if(simulate && (targetSimulatedProgress > progress)) {
      const simulation = setInterval(() => {
        setProgress(progress + 1)
      }, 15000 / targetSimulatedProgress)
      return () => clearInterval(simulation)
    }
    if(progress === targetSimulatedProgress) {
      setSimulate(false)
    }
  }, [simulate, targetSimulatedProgress, progress])

  return (
    <>
      <div style={{ opacity: hideBar ? 0 : 1, transition: 'opacity 1s ease-in' }}>
        <ProgressBar progress={progress}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 64}}>
        <Button onClick={handleStartRequest} loading={loading}>Start Request</Button>
        <Button onClick={handleFinishRequest} buttonType='finish'>Finish Request</Button>
      </div>
    </>
  );
};
