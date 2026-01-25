import '../styles/card.css'

export default function card({ clgname, grade, location, course }) {
    return (
        <>
            <div className="card">
                <h2 style={{ margin: "15px 0px 15px 0px " }}>{clgname}</h2>
                <p >{location} </p>
                <p >{grade}</p>
                <p >{course}</p>
            </div>
        </>
    )
}