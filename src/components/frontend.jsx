import '../styles/frontend.css'

export default function frontend() {
    return (
        <>
            <div id="skills" className='skill' style={{ width: "100%", background: "transparent" }}>
                <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: "60px" }}>
                    <h2 style={{ 
                        borderBottom: "3px solid var(--accent-color)", 
                        color: "var(--text-primary)",
                        padding: "10px 20px",
                        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                        fontWeight: "700",
                        letterSpacing: "2px",
                        marginTop: "40px"
                    }}>SKILLS</h2>
                </div>
                <h3 style={{ textAlign: "center", margin: "40px 0 25px", color: "var(--text-primary)", fontWeight: "600", letterSpacing: "1px" }}>FRONTEND TECHNOLOGY</h3>
                <div className="pic">
                    <div className="skill-item">
                        <img src="/Skill/css.png" alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <img src="/Skill/html.png" alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <img src="/Skill/JS1.png" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <img src="/Skill/react.png" alt="React" />
                        <p>React</p>
                    </div>
                    <div className="skill-item">
                        <img src="/Skill/tailwind.png" alt="Tailwind" />
                        <p>Tailwind</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                        <h3 style={{ color: "var(--text-primary)", fontWeight: "600", letterSpacing: "1px", textAlign: "center", margin: "20px 0" }}>BACKEND TECHNOLOGY</h3>
                        <div className="pic">
                            <div className="skill-item">
                                <img src="/Skill/nodejs.png" alt="Node.js" />
                                <p>Node.js</p>
                            </div>
                            <div className="skill-item">
                                <img src="/Skill/express.png" alt="Express" />
                                <p>Express</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ color: "var(--text-primary)", fontWeight: "600", letterSpacing: "1px", textAlign: "center", margin: "20px 0" }}>DATABASE</h3>
                        <div className="pic">
                            <div className="skill-item">
                                <img src="/Skill/mongodb.png" alt="MongoDB" />
                                <p>MongoDB</p>
                            </div>
                            <div className="skill-item">
                                <img src="/Skill/mysql1.png" alt="MySQL" />
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                </div>
 
                <h3 style={{ color: "var(--text-primary)", fontWeight: "600", letterSpacing: "1px", textAlign: "center", margin: "40px 0 20px" }}>TOOLS</h3>
                <div className="pic">
                    <div className="skill-item">
                        <img src="/Skill/git.png" alt="Git" />
                        <p>Git</p>
                    </div>
                    <div className="skill-item">
                        <img src="/github.png" alt="GitHub" />
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </>
    )
}