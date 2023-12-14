import './Assets/CSS/Nav.css'
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
function App(){
  return(
    <>
      <Nav/>
      <div className='main'>
      <p>
    Hello World
    </p>
    </div>
    <Footer/>
    <Home/>
    </>
  )
}

export default App;