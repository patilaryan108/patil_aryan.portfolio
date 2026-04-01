import '../styles/background.css'
import { useState, useEffect, useRef } from 'react'
import { useIsMobileOrTablet } from '../hooks/useMediaQuery'

export default function Background() {
    const [displayText, setDisplayText] = useState("")
    const isMobileOrTablet = useIsMobileOrTablet()
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

    const scrollToSection = (e, url) => {
        if (url.startsWith('#')) {
            e.preventDefault()
            const sectionId = url.substring(1)
            const element = document.getElementById(sectionId)
            if (element) {
                const navHeight = 60
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - navHeight

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        }
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/patilaryan108',
            icon: '/github2.png'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/patil-aryan-1410322b0/',
            icon: '/linkedin.png'
        },
        {
            name: 'Email',
            url: '#contact',
            icon: '/email.png'
        }
    ]

    return (
        <>
            <div className="hero-container" id="home">
                <div className="hero-content">
                    <div className='hero-text'>
                        <h2 className='hero-greeting'>Hi, &nbsp;I am </h2>
                        <h1 className='hero-name'>PATIL&nbsp; ARYAN</h1>

                        <div className='typing-animation'>
                            <span className='typing-text'>
                                <h3>{displayText}<span className='cursor'>|</span></h3>
                            </span>
                        </div>
                    </div>

                    {/* Desktop Social Media - Below text */}
                    {!isMobileOrTablet && (
                        <div className='social-media-desktop'>
                            {socialLinks.map((social, index) => (
                                <div className='social-icon' key={index}>
                                    <a
                                        href={social.url}
                                        onClick={(e) => scrollToSection(e, social.url)}
                                        target={social.url.startsWith('http') ? "_blank" : "_self"}
                                        rel={social.url.startsWith('http') ? "noopener noreferrer" : ""}
                                        aria-label={social.name}
                                    >
                                        {social.name === 'GitHub' && (
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        )}
                                        {social.name === 'LinkedIn' && (
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        )}
                                        {social.name === 'Email' && (
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg>
                                        )}
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="hero-image-section">
                    {/* Profile Image with Overlay */}
                    <div className="profile-image-container">


                        <img src="/Patil_Aryan.png" alt="Patil Aryan" className="profile-image" />
                    </div>
                </div>
            </div>
        </>
    )
}