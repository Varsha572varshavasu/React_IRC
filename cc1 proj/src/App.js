import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css'
// import './components/welcome.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Welcome from './components/welcome'
// import Dashboard from './components/dashboard'
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
      <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            {/* <Link className="navbar-brand" to={'/sign-in'}>KGRF</Link> */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto" id = "nav">
                <li className="nav-item"><img src="https://i.pinimg.com/originals/57/3c/6d/573c6d10a32ee438d69f5b5747e5b055.png" width="100" height="50" /></li>
                <li className="nav-item"><img src="data:image/png;base64,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" width="100" height="50"  /></li>
                <li className="nav-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rElvXwViuxRPstLHPn5bT8Sticf8ubJXlg&usqp=CAU" width="100" height="50" /></li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
    </Router>
    </>

  )
}
export default App