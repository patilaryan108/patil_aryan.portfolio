import '../styles/background.css'
import { useState, useEffect, useRef } from 'react'

export default function Background() {
    const [displayText, setDisplayText] = useState("")
    const texts = ["ENGINEERING STUDENT", "DATA STRUCTURES & ALGORITHMS", "FULL STACK DEVELOPER"]
    const textIndexRef = useRef(0)
    const charIndexRef = useRef(0)
    const isTypingRef = useRef(true)

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTextIndex = textIndexRef.current
            const currentText = texts[currentTextIndex]

            if (isTypingRef.current) {
                // Typing forward
                if (charIndexRef.current < currentText.length) {
                    setDisplayText(currentText.substring(0, charIndexRef.current + 1))
                    charIndexRef.current += 1
                } else {
                    // Finished typing, wait then start deleting
                    isTypingRef.current = false
                    // Wait 2 seconds before deleting
                    setTimeout(() => {
                        isTypingRef.current = false
                    }, 5000)
                }
            } else {
                // Deleting backward
                if (charIndexRef.current > 0) {
                    charIndexRef.current -= 1
                    setDisplayText(currentText.substring(0, charIndexRef.current))
                } else {
                    // Finished deleting, move to next text
                    textIndexRef.current = (textIndexRef.current + 1) % texts.length
                    charIndexRef.current = 0
                    isTypingRef.current = true
                }
            }
        }, 100) // Speed of typing (lower = faster)

        return () => clearInterval(interval)
    }, [texts])

    return (
        <>
            <div className="container" id="home" >
                <div className="left">
                    <div className='info'>
                        <h2 id='hi'>Hi, &nbsp;I am </h2>
                        <h1>PATIL&nbsp; ARYAN</h1>

                        <div className='typing-animation'>
                            <span className='typing-text'><h3>{displayText}<span className='cursor'>|</span></h3></span>
                        </div>
                    </div>
                    <div className='social-media'>
                        <div className='square'><a href="https://www.linkedin.com/in/patil-aryan-1410322b0/"><img src="/linkedin.png" alt="no img" /></a></div>
                        <div className='square'> <a href="https://www.instagram.com/patil_aryan_108/?next=%2F"><img src="/instagram.png" alt="" /></a> </div>
                        <div className='square'> <a href="https://github.com/patilaryan108"><img src="/github2.png" alt="" /></a></div>
                    </div>
                </div>
                <div className="right">
                </div>
            </div>
        </>
    )
}