import './Navbar.css'


export default function Navbar() {
  return (
    <header className="header">
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="icons">
            <i className='bx bx-menu' id="menu-icon"></i>
            <i className='bx bx-x' id="close-icon"></i>
        </label>
        <nav className="navbar">
            <a href="#">HOME</a>
            <a href="#">ABOUTE</a>
            <a href="#">GALLERY</a>
            <a href="#">SERVICES</a>
            <a href="#">CONTACT</a>
        </nav>
    </header>

  )
}
