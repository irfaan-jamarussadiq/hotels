function NavBar() {
  return (
    <nav className='NavBar'>
      <ul className='nav-items'>
        <li className='nav-item'>
          <a className='company nav-link'>Hotels.com</a>
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

export default NavBar