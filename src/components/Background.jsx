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
                                        <img src={social.icon} alt={social.name} />
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