import React from 'react'
import Logo from '../../../public/imgs/logo.svg'
import CartIcon from '../../assets/icons/CartIcon'

function header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
            <nav className="header-nav">
            <a href="">Репродукции</a>
            <a href="">Новинки</a>
            <a href="">О нас</a>
            <CartIcon />
          </nav>
        </div>
      </div>
      <div className="menu-burger">
        
      </div>
    </header>
  )
}

export default header