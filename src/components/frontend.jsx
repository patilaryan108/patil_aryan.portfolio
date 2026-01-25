import '../styles/frontend.css'

export default function frontend() {
    return (
        <>
            <div id="skills" className='skill' style={{ paddingTop: "20px" }}>
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <h2 style={{ marginTop: "50px", border: "5px solid white", height: "fit-content", width: "fit-content", padding: "10px 25px 10px 25px", color: "#ffffff" }} >SKILL</h2>
                </div>
                <h3 style={{ display: "flex", justifyContent: "center", margin: "50px 0px 5px 0px" }}>FRONTEND TECHNOLOGY</h3>
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
                        <h3 style={{ display: "flex", justifyContent: "center", margin: "10px 0px 10px 0px" }}>BACKEND TECHNOLOGY</h3>
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
                        <h3 style={{ display: "flex", justifyContent: "center", margin: "0px 0px 10px 0px" }}>DATABASE</h3>
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

                <h3 style={{ display: "flex", justifyContent: "center", margin: "0px 0px 10px 0px" }}>TOOLS</h3>
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