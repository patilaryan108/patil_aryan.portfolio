import '../styles/Card3.css'

export default function Card3({ video, name }) {
    return (
        <>
            <div className="card3">
                <video src={video} autoPlay loop muted style={{ height: "300px", width: "100%", borderRadius: "16px" }}></video>
                <p className="project-name">{name}</p>
            </div>
        </>
    );
}
