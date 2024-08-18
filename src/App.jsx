import Hotel from './Hotel'
import NavBar from './NavBar'
import SignIn from './SignIn'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import HelpCenter from './HelpCenter'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/help' element={<HelpCenter />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
