
import './App.css'

//import Navbar and Main from components folder
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

function App() {
  return (
    <div id="container">
      <Navbar />      
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
