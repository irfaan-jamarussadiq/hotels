import Hotel from './components/Hotel'
import NavBar from './components/NavBar'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import HelpCenter from './pages/HelpCenter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
