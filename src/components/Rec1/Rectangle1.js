
import React, { useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'

import './Rectangle1.css'
export default function Rectangle1() {
  const [showNav, setShowNav] = useState(false);
  const showNavFun = ()=> setShowNav(! showNav)
  return (
    <div className='rectangle-1' style={showNav === true ? {width: '1700px'} : {}}>
      <NavBar showNav={showNav} setShowNav={showNavFun}/>
      <Home showNav={showNav}/>
    </div>
  )
}
