import '../styles/card.css'

export default function card({ clgname, grade, location, course }) {
    return (
        <>
            <div className="card education-card">
                <div className="card-header">
                    <h3>{clgname}</h3>
                    <span className="location"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {location}</span>
                </div>
                <div className="card-body">
                    <p className="course">{course}</p>
                    <div className="grade-badge">{grade}</div>
                </div>
            </div>
        </>
    )
}