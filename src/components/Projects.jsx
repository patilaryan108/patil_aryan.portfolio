import '../styles/Projects.css'
import Card1 from './Card1'
import Card3 from './Card3'

export default function Project() {
    return (
        <>
            <div id='projects' style={{ maxWidth: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
                <div className="project-background" >
                    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <h2 style={{ border: "5px solid #000000", margin: "0px", height: "fit-content", width: "fit-content", padding: "10px 25px 10px 25px", margin: "50px 0px 50px 0px" }} >PROJECTS</h2>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", margin: "45px 0px 80px 0px", flexWrap: "wrap", maxWidth: "100%", overflowX: "hidden" }}>
                        <Card1 img={"Resume.png"} name="PORTFOLIO" ></Card1>
                        <Card3 video={"/video.mp4"} name={"COMING SOON"}></Card3>
                        <Card3 video={"/video.mp4"} name={"COMING SOON"}></Card3>
                    </div>
                </div>
            </div>

        </>
    )
}