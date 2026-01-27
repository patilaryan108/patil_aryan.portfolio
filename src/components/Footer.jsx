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
                        <a href="https://www.instagram.com/aka.ganesh108/" className="social-icon" title="X">
                            <span> <img src="/instagramwhite.png" alt="" style={{ width: "20px", height: "20px" }} /> </span>
                        </a>
                        <a href="https://www.linkedin.com/in/patil-aryan-1410322b0/" className="social-icon" title="LinkedIn">
                            <span>in</span>
                        </a>
                        <a href="https://github.com/patilaryan108" className="social-icon" title="GitHub">
                            <span> <img src="/github1.png" alt="" style={{ width: "20px", height: "20px" }} /> </span>
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
