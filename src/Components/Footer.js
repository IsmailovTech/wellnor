import React from 'react'
import Logo from '../Assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons flex">
          <BsTwitter style={{ color: '00E0FF' }} />
          <FaTelegram style={{ color: '2AABEE' }} />
          <BsYoutube style={{ color: 'red' }} />
          <FaFacebookF style={{ color: '005EEC' }} />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          {' '}
          <a href="tel:+998952900001">
            {' '}
            <span>+998 952900001 </span>
          </a>
          <span>http://wellnor.uz/</span>
          <span>http://wellnor.uz/</span>
          <span>http://wellnor.uz/</span>
        </div>
        <div className="footer-section-columns">
          <span>Ma'lumotlar himoyalangan</span>
          <span>Toshkent, Chilonzor</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
