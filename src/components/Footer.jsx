import '../styles/Footer.css'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const navHeight = 40 // Navigation bar height + padding
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - navHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <span className="logo-text">made with <span className="heart-logo">❤</span> by PATIL ARYAN</span>
                    </div>
                    <p className="footer-description">
                        Empowering creativity with advanced web development tools to improve design quality and user experiences.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/aka.ganesh108/" className="social-icon" title="Instagram">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/patil-aryan-1410322b0/" className="social-icon" title="LinkedIn">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://github.com/patilaryan108" className="social-icon" title="GitHub">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                    <button className="back-to-top-btn" onClick={scrollToTop}>
                        <span>▲</span> BACK TO TOP
                    </button>
                </div>

                {/* Middle Section - Site Map */}
                <div className="footer-section">
                    <h3 className="footer-section-title">Site Map</h3>
                    <ul className="footer-links">
                        <li><a onClick={() => scrollToTop()} style={{ cursor: 'pointer' }}>Homepage</a></li>
                        <li><a onClick={() => scrollToSection('about-me')} style={{ cursor: 'pointer' }}>About</a></li>
                        <li><a onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</a></li>
                        <li><a onClick={() => scrollToSection('skills')} style={{ cursor: 'pointer' }}>Skills</a></li>
                        <li><a onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact Us</a></li>
                    </ul>
                </div>

                {/* Right Section - Legal */}
                <div className="footer-section">
                    <h3 className="footer-section-title">Legal</h3>
                    <ul className="footer-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Services</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
