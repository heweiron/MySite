import React, {useState} from 'react'
import "./Navbar.css"
import { MdOutlineHdrStrong } from "react-icons/md"
import { AiOutlineBars } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"
import Button from '../UI/button/Button'
import '../UI/button/Button.css'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='container navbar'>
        <div className='logo'>
            <MdOutlineHdrStrong color="#fff" size={33} />
            <p className='logo-text'>
              Weirong<span>He</span>
            </p>
        </div>
        <menu>
            <ul className='nav-links' id={showMenu ? 'nav-link-mobile' : 'nav-link-mobile-hide'}>
              <li><a href='#header'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#project'>Project</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li className='nav-btn'>
                <Button text={'Get Started'} btnClass={'btn-dark'} href={'#about'}/>
              </li>
            </ul>
        </menu>
        <div className='menu-icons' onClick={toggleMenu}>
          {
            showMenu ? (<RiCloseLine color='#fff' size={30}/>) : (<AiOutlineBars color='#fff' size={27}/>)
          }
        </div>
    </nav>
  )
}

export default Navbar