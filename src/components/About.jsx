import '../styles/About.css'
import Card from './Card'
import { useEffect, useRef } from 'react'

export default function About() {
    const sectionRef = useRef(null)
    const elementsRef = useRef([])

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => {
            elementsRef.current.forEach((el) => {
                if (el) observer.unobserve(el)
            })
        }
    }, [])

    return (
        <>
            <div className="about" id="about-me" ref={sectionRef}>
                <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "50px" }}>
                    <h2 className="fade-in-up" ref={(el) => (elementsRef.current[0] = el)} style={{ border: "5px solid #ffffff", margin: "0px", height: "fit-content", width: "fit-content", padding: "10px 25px 10px 25px" }} >ABOUT ME</h2>
                </div>
                <div>
                    <p className="fade-in-up" ref={(el) => (elementsRef.current[1] = el)} style={{ alignItems: "center", fontSize: "20px", textAlign: "justify", padding: "60px 150px 60px 150px" }}>Dedicated Computer Science student with strong foundation in Data Structures & Algorithms and Java programming.
                        Passionate about web development with hands-on experience building full-stack applications. Active contributor in
                        technical communities with proven problem-solving mindset, continuous learning attitude, and collaborative approach to
                        software development.
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "stretch", gap: "40px", margin: "45px 20px 80px 20px", flexWrap: "wrap" }}>
                    <div className="fade-in-up" ref={(el) => (elementsRef.current[2] = el)} style={{ animationDelay: "0.2s", flex: "1 1 400px", maxWidth: "500px" }}>
                        <Card clgname={"Nitte Meenakshi Institute of Technology"} location={"Bengluru , Karnataka"} grade={"CGPA : 8.23"} course={"Bachelor of Engineering in Computer Science"}></Card>
                    </div>
                    <div className="fade-in-up" ref={(el) => (elementsRef.current[3] = el)} style={{ animationDelay: "0.4s", flex: "1 1 400px", maxWidth: "500px" }}>
                        <Card clgname={"Shahu Maharaja PU College"} location={"Bidar, Karnataka"} grade={"Percentage: 87.5%"} course={"Senior Secondary (PCMB)"}></Card>
                    </div>
                </div>
            </div>
        </>
    )
}