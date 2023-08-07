import React from 'react'
import './Experience.css'
import {FaBook} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'

const Experience = () => {
  return (
    <div className='container'>
        <div className='title'>
            <h1>Experience</h1>
        </div>
        <div className='experience'>
            <div className='experience-left'>
                <ul className='exp-list'>
                    <li>
                        <div className='item'>
                            <FaBook color='#bec6d1' size={33} />
                            <span>Kapiolani Community College</span>
                            <span>2016-2019</span>
                            <span>Pre-Computer Science</span>
                        </div>
                    </li>

                    <li>
                        <div className='item'>
                            <FaBook color='#bec6d1' size={33} />
                            <span>University of Hawaii at Manoa</span>
                            <span>2020-2022</span>
                            <span>B.S Computer Science</span>
                        </div>
                    </li>

                    <li>
                        <div className='item'>
                            <MdWork color='#bec6d1' size={33} />
                            <span>City and County of Honolulu</span>
                            <span>2022-2023</span>
                            <span>Computer Programmer II</span>
                        </div>
                    </li>

                    <li>
                        <div className='item'>
                            <MdWork color='#bec6d1' size={33} />
                            <span>City and County of Honolulu</span>
                            <span>2023-Present</span>
                            <span>Data Processing Systems Analyst I</span>
                        </div>
                    </li>
                </ul>

            </div>
            <div className='experience-right'>

                
            </div>
        </div>
    </div>
  )
}

export default Experience