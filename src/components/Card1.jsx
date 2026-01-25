import '../styles/Card1.css'

export default function card({ img, name }) {
    return (
        <>
            <div className="card1">
                <img src={img} alt="" style={{ height: "300px", width: "100%", borderRadius: "16px" }} />
                <p className="project-name">{name}</p>
            </div>
        </>
    )
}