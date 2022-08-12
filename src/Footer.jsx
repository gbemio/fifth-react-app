import React from 'react'
import TwitterIcon from './Images/TwitterIcon.png'
import InstagramIcon from './Images/Instagram Icon.png'
import FacebookIcon from './Images/Facebook Icon.png'
import GithubIcon from './Images/GitHub Icon.png'



const Footer = () => {
  return (
    <div className='footer-div' >
      <img src={TwitterIcon} alt="" width='25px' height='25px' />
      <img src={InstagramIcon} alt="" width='25px' height='25px' />
      <img src={FacebookIcon} alt="" width='25px' height='25px'/>
      <img src={GithubIcon} alt="" width='25px' height='25px'/>
    </div>
  )
}

export default Footer
