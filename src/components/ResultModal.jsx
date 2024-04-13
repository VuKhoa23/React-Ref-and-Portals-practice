import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const ResultModal =  forwardRef(function ResultModal({ onReset, targetTime, remainingTime}, ref) {
    const resultDialog = useRef()

    const userLost = remainingTime <= 0

    // use this hook to expose the functions to others components
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                resultDialog.current.showModal()
            }
        }
    });

    return createPortal(
        <dialog ref={resultDialog} className="result-modal">
            <h2>You {userLost ? 'Lost' : 'Win'}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{remainingTime / 1000} seconds left</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button >Close</button>
            </form>
        </dialog>
        , document.getElementById("modal")
    )
})

export default ResultModal