import '../styles/Navigation.css'

export default function Navigation() {
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

    const viewResume = () => {
        // Open resume in a new tab for viewing
        window.open('https://drive.google.com/file/d/1UP0dvAdvCFzfvQA8IanKeahxqQtWBdyH/view?usp=drive_link', '_blank')
    }

    return (
        <>
            <div className="Navigation" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 id='resume-nav' onClick={viewResume} style={{ cursor: 'pointer', marginRight: 'auto' }}>Resume</h3>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <h3 id='navh3' onClick={() => scrollToSection('about-me')} style={{ cursor: 'pointer' }}>About Me</h3>
                    <h3 id='navh3' onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</h3>
                    <h3 id='navh3' onClick={() => scrollToSection('skills')} style={{ cursor: 'pointer' }}>Skills</h3>
                    <h3 id="Contact" onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</h3>
                </div>
            </div>
        </>
    )
}