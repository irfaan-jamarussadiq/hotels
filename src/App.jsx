import Hotel from './Hotel'
import NavBar from './NavBar'
import SignIn from './SignIn'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>      
    </div>
  )
}

export default App
