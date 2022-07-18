import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#fff', 
                    marginRight:'2rem'}}/>
                        <div>
                            <p>Manhattan</p>
                            <h4>New York, New York</h4>
                         </div>
                </div>
                <div className='phone'>
                     <h4><FaPhone size={20} style={{color:'#fff', 
                    marginRight:'2rem'}}/>+1 347 384 0957</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', 
                    marginRight:'2rem'}}/>newyork@newyyork.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the City</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:'#fff', 
                    marginRight:'1rem'}}/>
                    <FaTwitter size={30} style={{color:'#fff', 
                    marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color:'#fff', 
                    marginRight:'1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer