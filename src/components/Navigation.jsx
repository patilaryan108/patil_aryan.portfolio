import '../styles/Navigation.css'
import { useState } from 'react'
import { useIsMobileOrTablet } from '../hooks/useMediaQuery'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobileOrTablet = useIsMobileOrTablet()

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const navHeight = 60 // Navigation bar height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - navHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
        // Close menu after clicking on mobile
        if (isMobileOrTablet) {
            setIsMenuOpen(false)
        }
    }

    const viewResume = () => {
        window.open('https://drive.google.com/file/d/1UP0dvAdvCFzfvQA8IanKeahxqQtWBdyH/view?usp=drive_link', '_blank')
        if (isMobileOrTablet) {
            setIsMenuOpen(false)
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className={`navigation ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="nav-container">
                    <h3
                        id='resume-nav'
                        onClick={viewResume}
                        className="nav-logo"
                    >
                        Resume
                    </h3>

                    {/* Hamburger Icon for Mobile/Tablet */}
                    {isMobileOrTablet && (
                        <button
                            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    )}

                    <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <h3 onClick={() => scrollToSection('about-me')}>About Me</h3>
                        <h3 onClick={() => scrollToSection('projects')}>Projects</h3>
                        <h3 onClick={() => scrollToSection('skills')}>Skills</h3>
                        <h3 onClick={() => scrollToSection('contact')}>Contact</h3>
                    </div>
                </div>
            </nav>

            {isMobileOrTablet && isMenuOpen && <div className="menu-spacer"></div>}
        </>
    )
}