import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './components/welcome.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Welcome from './components/welcome'
function App() {
  return (
    <>
        <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {/* <Link className="navbar-brand" to={'/sign-in'}>KGRF</Link> */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto" id = "nav">
                <li className="nav-item"><Link className="nav-link" to={'/sign-in'}><b>Login</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/sign-up'}><b>Sign up</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/logout'}><b>Logout</b></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/logout" element={<Welcome />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>

  )
}
export default App