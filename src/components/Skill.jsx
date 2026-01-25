import '../styles/skill.css'
import Frontend from './frontend'
import Projects from './Projects'
import Contact from './Contact'

export default function skill() {
    return (
        <>
            <div className="skill-background"  >
                <Projects></Projects>
                <div>
                    <Frontend></Frontend>
                </div>
                <div>
                    <Contact></Contact>
                </div>
            </div >
        </>
    )
}