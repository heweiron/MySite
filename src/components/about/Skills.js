import React from 'react'
import './Skills.css'

const Skills = ({image, name, description}) => {
  return (
    <div className="container">
        
        <div className="card">
            <div className="slide slide1">
                <div className="content">
                    <div className="logo">
                        <img src={image} alt='logo' />
                        <h2>{name}</h2>
                    </div>
                </div>
            </div>
            <div className="slide slide2">
                <div className="content">
                    
                    
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills