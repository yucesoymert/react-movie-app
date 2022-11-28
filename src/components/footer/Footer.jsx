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
            <Link to='/'>Home</Link>
            <a href='https://portfolio-proj3ct.vercel.app/#contact' target='_blank' >Contact me</a>
            <a href='https://portfolio-proj3ct.vercel.app/' target='_blank' >About me</a>
          </div>
          <div className="footer__content__menu">
            <a href='https://www.imdb.com/chart/top/?ref_=nv_mv_250' target='_blank'>You must watch</a>
            <a href='https://www.fandango.com/movies-in-theaters' target='_blank'>Recent release</a>
            <a href='https://www.imdb.com/chart/top/?ref_=nv_mv_250' target='_blank'>Top IMDB</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer