import React from 'react'
import img1 from '../../../public/imgs/repimg1.jpg'

function rep() {
  return (
    <div className="rep">
      <div className="container">
        <div className="rep-row">
          <div className="rep-header">
            <h3>Репродукции</h3>
            <div className="rep-buttons">
              <button>Франция</button>
              <button>Германия</button>
              <button>Англия</button>
            </div>
          </div>
          <div className="rep-boxs">
            <div className="rep-page">
              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img1} alt="" />
                </div>
                <p>Марсель Руссо</p>
                <h3>Охота Амура</h3>
                <h6>Холст, масло (50х80)</h6>
                <h5>14 500 руб</h5>
                <button>В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rep