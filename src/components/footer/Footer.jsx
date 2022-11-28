import React from 'react'
import { Link } from 'react-router-dom'

// import scss
import './footer.scss'

 // import png
 import logo from '../../assets/meflix.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className='logo'>
            <img src={logo} alt='' />
            <Link to="/">Meflix</Link>
          </div>
        </div> 
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to=''>Home</Link>
            <Link to=''>Contact me</Link>
            <Link to=''>About me</Link>
          </div>
          <div className="footer__content__menu">
            <Link to=''>You must watch</Link>
            <Link to=''>Recent release</Link>
            <Link to=''>Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer