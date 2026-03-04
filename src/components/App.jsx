import '../styles/App.css'
import '../styles/responsive.css'
import Navigation from './Navigation'
import Background from './Background'
import About from './About'
import Skill from './Skill'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation></Navigation>
      <div style={{ flex: 1 }}>
        <Background></Background>
        <About></About>
        <Skill></Skill>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
