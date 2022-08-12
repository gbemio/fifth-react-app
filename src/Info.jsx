import React from 'react'
import ProfilePicture from './Images/IMG_8795.JPG'
import Mail from './Images/Mail.png'
import Linkedin from './Images/linkedin.png'

const Info = () => {
  return (
    <div className='info-div'>
        <img src={ProfilePicture} alt="" className='profile' />
      <h2>Odukoya Gbemisola</h2>
      <h4>Full-stack Developer</h4>
      <p className='website'>odukoyagbemisola.website</p>

<div className="btns-div">
      <button className="mail-btn">  <img src={Mail}alt="" className='mail-img' /> Email</button>
      <button className='linkedin-btn'> <img src={Linkedin} alt="" className='linkedin-img' /> LinkedIn</button>
      </div>
    </div>
  )
}

export default Info
