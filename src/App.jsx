import ContactMe from "./components/Contactme"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Tools from "./components/Tools"

function App() {
  

  return (
    <div>
      <Header/>
      <main>
        <Profile/>
        <Tools/>
        <Projects/>
        <ContactMe/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
