import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './header.scss'

import logo from '../../assets/meflix.png'

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  },
];

const Header = () =>{

  const { pathName } = useLocation();
  const headerRef = useRef(null)

  const active = headerNav.findIndex(e => e.path === pathName);

  useEffect(() => { 
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', shrinkHeader) 
    return () => {
      window.removeEventListener('scroll', shrinkHeader) 
    }
  }, [])

  return (
    <div ref={headerRef} className='header' >
      <div className='header__wrap container' >
        <div className='logo'>
          <img src={logo} alt='' />
          <Link to="/">Myflix</Link>
        </div>
        <ul className='header__nav'>
          {
            headerNav.map((e, index) => (
              <li key={index} className={`${index === active ? active : ``}`}>
                <Link to={e.path}>
                  {e.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header 