import '../styles/skill.css'
import Frontend from './frontend'
import Projects from './Projects'

export default function skill() {
    return (
        <>
            <div className="skill-background"  >
                <Projects></Projects>
                <div>
                    <Frontend></Frontend>
                </div>
            </div >
        </>
    )
}