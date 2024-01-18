import React from 'react'
import './Footer.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactMailIcon from '@mui/icons-material/ContactMail';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='container-media-footer'>
          <FacebookOutlinedIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <ContactMailIcon/>
        </div>
        <p>Copyright. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer