import React, { useEffect, useState } from 'react'
import Logo from '../../../public/imgs/logo.svg'
import CartIcon from '../../assets/icons/CartIcon'
import MenuIcon from '../../assets/icons/MenuIcon';

function header() {

  const [modal, setModal] = useState(false);
  function toggleDrawer(){
      setModal(!modal)
  }
  
  useEffect(function(){
      toggleDrawer
  },[modal])

  return (
    <header className='header'>
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
            <nav className="header-nav">
            <a href="#rep">Репродукции</a>
            <a href="#nov">Новинки</a>
            <a href="#onas">О нас</a>
            <CartIcon />
            <button onClick={toggleDrawer} className="menu-burger">
            <MenuIcon />
          </button>
          </nav>
        </div>
      </div>
      <div className={modal? 'header-drawer open' : 'header-drawer'}>
        <div className="drawer-links">
            <a href="#rep">Репродукции</a>
            <hr />
            <a href="#nov">Новинки</a>
            <hr />
            <a href="#onas">О нас</a>
        </div>
      </div>
    </header>
  )
}

export default header;