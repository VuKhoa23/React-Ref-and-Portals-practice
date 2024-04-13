import { useState, useRef } from "react"
import ResultModal from "./ResultModal"
import { createPortal } from "react-dom"

export default function TimerChanllenge({ title, targetTime }) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timer = useRef()
    const resultDialog = useRef()

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        resultDialog.current.open();
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000)
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10)
    }

    const handleStop = () => {
        resultDialog.current.open();
        clearInterval(timer.current)
    }

    return (
        <>
            <ResultModal ref={resultDialog} targetTime={targetTime} remainingTime={timeRemaining} 
            onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"}
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running' : 'Timer inactive'}
                </p>
            </section>
        </>

    )
}