import React from 'react'
import './About.css'
import Skills from './Skills'
import Experience from './Experience'
import db from '../../firebase'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'

const About = () => {

  const [skills, setSkills] = useState([{ name: 'Loading...', id: 'initial' }]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'skills'), (snapshot) =>
        setSkills(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <section id='about'>
      <div className='container about'>
        <Experience />

        <div className='about-skills'>
          <h1>Skills</h1>
          <ul>
            {skills.sort((a, b) => a.name > b.name ? 1 : -1)
              .map((skill) => (
                <li key={skill.id}><Skills key={skill.id} image={skill.logo} name={skill.name} description={skill.description} /></li>
              ))}
          </ul>


        </div>
      </div>
    </section>
  )
}

export default About