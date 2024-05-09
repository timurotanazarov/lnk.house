import React from 'react'
import BigImg from '../../../public/imgs/onasbigimg.png'
import Img1 from '../../../public/imgs/about-1.jpg'
import Img2 from '../../../public/imgs/about-2.jpg'
import Img3 from '../../../public/imgs/about-3.jpg'

function onas() {
  return (
    <div id='onas' className="onas">
      <div className="container">
        <div className="onas-row">
          <div className="onas-img">
            <img src={BigImg} alt="" />
          </div>
          <div className="onas-content">
            <h4>Наша команда</h4>
            <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
            <div className="onas-content__imges">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default onas