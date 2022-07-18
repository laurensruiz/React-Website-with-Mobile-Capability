import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'
import nycVideo from '../assets/nycVideo.mp4'

function Video() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={nycVideo} type='video/mp4'/>
        </video>
    <div className='content'>
        <h1>New York City</h1>
        <p>Most culturally diverse city.</p>
        <div>
            <Link to ='/contact' className='btn'>Contact</Link>
            <Link to ='/pricing' className='btn btn-light'>Pricing</Link>
        </div>
    </div>
    </div>
  )
}

export default Video