import React from 'react'
import Logo from '../../../public/imgs/logo.svg'
import FacebookIcon from '../../assets/icons/FacebookIcon'
import InstagramIcon from '../../assets/icons/InstIcon'
import YouTubeIcon from '../../assets/icons/YouTubeIcon'

function footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-box">
            <div className="header-logo footer-logo">
              <img src={Logo} alt="" />
            </div>
            <a href="tel:+998919990525" className="footer-box__tel tel">+7 (999) 999-99-99</a>
            <a href="" className="footer-box__link">Мастерская</a>
          </div>
          <div className="footer-box">
            <h3 className="footer-box__tel">Репродукции</h3>
            <a href="#rep" className="footer-box__link">Франция</a>
            <a href="#rep" className="footer-box__link">Германия</a>
            <a href="#rep" className="footer-box__link">Англия</a>
          </div>
          <div className="footer-box">
          <h3 className="footer-box__tel">Новинки</h3>
          <a href="#nov" className="footer-box__link">2021</a>
          <a href="#nov" className="footer-box__link">2020</a>
          </div>
          <div className="footer-box">
          <h3 className="footer-box__tel">О нас</h3>
          <a href="#nov" className="footer-box__link">Художники</a>
          <a href="#nov" className="footer-box__link">Менеджеры</a>
          </div>
          <div className="footer-box">
            <div className="footer-box__icons">
              <a href=""><FacebookIcon /></a>
              <a href="https://www.instagram.com/t1mur__sww/"><InstagramIcon /></a>
              <a href=""><YouTubeIcon /></a>
            </div>
            <p>Ink. House ®</p>
            <h6>Developed and designed by D1lshadovich</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer