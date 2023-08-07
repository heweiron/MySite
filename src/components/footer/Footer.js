import React, { useState } from 'react'
import './Footer.css'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si'
import { IoMdCheckmarkCircle } from 'react-icons/io'

const Footer = () => {

  const [isShown, setIsShown] = useState(false);
  const [isCopied, setIsCopied] = useState(0);

  const showEmail = () => {
    setIsShown(true);
  }
  const hideEmail = () => {
    setIsShown(false);
  
  }
  const copy = async () => {
    await navigator.clipboard.writeText('heweiron9@gmail.com');
    // alert('Text copied');
    setIsCopied(1);
  }
  const dismissCopy = () => {
    setIsCopied(0);
  }

  return (
    <div>
      <div className='banner'></div>
      <section id='contact'>
        <div className='footer'>

          {/* Contact Information */}
          <div className='information'>
            <h1>Contact</h1>
            <div className='container logos'>


              <div className='email'>
                {isShown ? (
                  <div className='speech-bubble'>
                    <p>heweiron9@gmail.com</p>
                  </div>
                ) : ('')}

                <MdEmail className='logo' color="#fff" size={44} onMouseEnter={showEmail} onMouseLeave={hideEmail} onClick={copy} style={{cursor: 'pointer'}} />
                <div className='copied'  iscopied={isCopied} onAnimationEnd={dismissCopy}>
                  <IoMdCheckmarkCircle color='rgb(39, 138, 36)' size={20} />
                  <p>Copied Email address to clipboard</p>
                </div>
              </div>

              <a href='https://www.linkedin.com/in/weirong-he-65348819b/' target="_blank" rel="noreferrer noopener">
                <SiLinkedin className='logo' color="#fff" size={33} />
              </a>
              <a href='https://github.com/heweiron' target="_blank" rel="noreferrer noopener">
                <SiGithub className='logo' color='#fff' size={33} />
              </a>
              <a href='https://twitter.com/Weir38640868' target="_blank" rel="noreferrer noopener">
                <SiTwitter className='logo' color='#fff' size={33} />
              </a>
            </div>

          </div>

          {/* Animated Waves */}
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>

          <footer style={{ background: 'white' }}><small>&copy; Copyright 2022, Weirong He</small></footer>
        </div>
      </section>
    </div>


  )
}

export default Footer