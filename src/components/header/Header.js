import React from 'react'
import './Header.css'
import LearnGif from '../../assets/learning.gif'
import Button from '../UI/button/Button'
import '../UI/button/Button.css'

const Header = () => {

  return (
    <section id='header'>
      <div className='container header'>
        <div className='header-left'>
          <h1>
            <span>HELLO! MY NAME IS</span>
            <span>Weirong He</span>
            <span>Software Developer</span>
          </h1>
          <p className='u-text-small u-text-light'>Eager to contribute developed knowledge in the Software Developer role. Skilled in Problem-solving and Critical thinking. Adaptable and driven with a strong work ethic and ability to thrive in team-based or individually motivated settings.</p>
          <div className='header-cta'>
            <Button text={'Learn More'} btnClass={'btn-dark'} href={'#about'}/>
            <Button text={'Resume'} btnClass={'btn-dark'} href={'https://firebasestorage.googleapis.com/v0/b/weiron9.appspot.com/o/Weirong%20He%20Resume.pdf?alt=media&token=ed9ea4f2-8659-4d13-a543-bc2393b7832e'} isNewTab={true}/>
          </div>
        </div>
        
        <div className='header-right'>
                <div className='bar'>
                    <svg>
                        <circle cx='50%' cy='50%' r='50%' ></circle>
                    </svg>
                    <img src={LearnGif} alt='my goal' />
                </div>
                
            </div>
      </div>
    </section>
  )
}

export default Header