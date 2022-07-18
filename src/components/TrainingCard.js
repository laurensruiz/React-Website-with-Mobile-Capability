import React from 'react'
import './TrainingCardStyles.css'
import {Link} from 'react-router-dom'
import window from '../assets/windowPicture.jpg'
import city from '../assets/cityPicture.jpg'

function TrainingCard() {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={window} className='img' alt='girl looking at window'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={city} className='img' alt='new york city'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TrainingCard