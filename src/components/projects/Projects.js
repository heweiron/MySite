import React from 'react'
import './Projects.css'
import { UHShield, TargetOnly } from '../index.js'

const Projects = () => {
  return (
    <section id='project'>
      <div className='container projects'>
        <h1 className='title'>Projects</h1>

        {/* UH Shield Project */}
        <div className='project'>
          <div className='button'>
            <div className='semicircle'>
              <a href='https://github.com/HACC2020/Trigeeks' target="_blank" rel="noreferrer noopener">
                <img className='logo' src={UHShield} alt='UH Shield' />
              </a>
              
            </div>
          </div>
          
          <div className='detail-border'>
            <div className='project-detail'>
              <h1 className='name'>UH Shield</h1>
              <h1 className='type'>IOS Application Project</h1>
              <p>Appication Developer in IOS mobile App charging in UI design, UI implement, backend data operation, QR code generation, auto-email sending functionality, etc.</p>
              <p>This project builds a backstage management system for building access which solves the problem of inefficiency and insecurity brought on by the old spreadsheet way of access management. Using this App, users can organize events at their room in the building, and guests will receive email with information of the event and a QR-code which is used as a pass for accessing the event building and to prove identity of guests.</p>
              <p>This Project won the Third-place in Hawaii Annual Code Challenge 2020 (Hackathon).</p>
            </div>
          </div> 
        </div>
        

        {/* Target Only Project */}
        <div className='project'>
          
          
          <div className='detail-border'>
            <div className='project-detail'>
              <h1 className='name'>Target Only</h1>
              <h1 className='type'>Unity 3D Game Project</h1>
              <p>Developed independently the whole unity game project which contains techniques including particle system, sound management system, UI, game logic etc.</p>
              <p>This project is a puzzle-solving game that has 10 different levels and the difficulty of levels is gradually increasing. Users can use the mouse to control the player object by click and drag player object so the player object can be shooted out as users desired and users can do the same operations again while the player object is flying to control the player object freely.</p>
              <p>The goal of this game is to control the player object to collide with the target only, but there will be many obstacle objects in each level and once player objects collide with obstacles, users lose. So users should control the player object to avoid those obstacles and hit the target to pass the level.</p>
            </div>
          </div> 

          <div className='button'>
            <div className='semicircle'>
              <a href='https://youtu.be/yJELxKJ7o48' target="_blank" rel="noreferrer noopener">
                <img className='logo' src={TargetOnly} alt='Target Only' />
              </a>
              
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
    
  )
}

export default Projects