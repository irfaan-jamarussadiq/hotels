import './App.css'
import Hotel from './Hotel'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hotel />
    </div>
  )
}

function NavBar() {
  return (
    <nav className='NavBar'>
      <ul className='nav-items'>
        <li className='nav-item'>
          <a className='nav-link'>Hotels.com</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'>Support</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'>Trips</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'>Sign in</a>
        </li>
      </ul>
    </nav>
  )
}

export default App
