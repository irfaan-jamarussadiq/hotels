import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className='NavBar'>
      <ul className='nav-items'>
        <li className='nav-item'>
          <Link to='/' className='company nav-link'>Hotels.com</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/help'>Support</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/trips'>Trips</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/signin'>Sign in</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar