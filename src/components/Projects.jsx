import '../styles/Projects.css'
import Card1 from './Card1'
import Card3 from './Card3'

export default function Project() {
    return (
        <>
        <div id='projects' style={{ width: "100%", background: "var(--bg-primary)" }}>
            <div className="project-background" >
                <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: "60px" }}>
                    <h2 style={{ 
                        borderBottom: "3px solid var(--accent-color)", 
                        color: "var(--text-primary)",
                        padding: "10px 20px",
                        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                        fontWeight: "700",
                        letterSpacing: "2px"
                    }}>PROJECTS</h2>
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto", gap: "40px" }}>
                    <a href="https://patil-aryan-portfolio.vercel.app/" style={{ textDecoration: "none" }} className="card1-link"><Card1 img={"Resume.png"} name="PORTFOLIO" ></Card1></a>
                        <Card3 video={"/video.mp4"} name={"COMING SOON"}></Card3>
                        <Card3 video={"/video.mp4"} name={"COMING SOON"}></Card3>
                    </div>
                </div>
            </div>

        </>
    )
} 