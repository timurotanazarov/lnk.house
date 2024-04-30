import React from 'react'
import img from '../../../public/imgs/banner-img.png'

function banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-row">
          <div className="banner-img">
            <img src={img} alt="" />
          </div>
          <div className="banner-content">
            <h2>Реплики картин от <span>Ink. House</span></h2>
            <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
            <button>Продукция</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default banner;