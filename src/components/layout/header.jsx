import React from 'react'
import Logo from '../../../public/imgs/logo.svg'
import CartIcon from '../../assets/icons/CartIcon'
import MenuIcon from '../../assets/icons/MenuIcon';

function header() {
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
            <a href="">О нас</a>
            <CartIcon />
            <div className="menu-burger">
            <MenuIcon />
          </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default header;