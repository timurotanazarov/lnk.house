import React from 'react'
import img1 from '../../../public/imgs/repimg1.jpg'
import img2 from '../../../public/imgs/repimg2.jpg'
import img3 from '../../../public/imgs/repimg3.jpg'
import img4 from '../../../public/imgs/repimg4.jpg'
import img5 from '../../../public/imgs/repimg5.jpg'
import img6 from '../../../public/imgs/repimg6.jpg'
import img7 from '../../../public/imgs/repimg7.jpg'
import img8 from '../../../public/imgs/repimg8.jpg'
import img9 from '../../../public/imgs/repimg9.jpg'
import img10 from '../../../public/imgs/repimg10.jpg'
import img11 from '../../../public/imgs/repimg11.jpg'
import img12 from '../../../public/imgs/repimg12.jpg'
import img13 from '../../../public/imgs/repimg13.jpg'
import img14 from '../../../public/imgs/repimg14.jpg'
import img15 from '../../../public/imgs/repimg15.jpg'
import img16 from '../../../public/imgs/repimg16.jpg'
import img17 from '../../../public/imgs/repimg17.jpg'
import img18 from '../../../public/imgs/repimg18.jpg'



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

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img2} alt="" />
                </div>
                <p>Анри Селин</p>
                <h3>Дама с собачкой</h3>
                <h6>Акрил, бумага (50х80)</h6>
                <h5>16 500 руб</h5>
                <button>В корзину</button>
              </div>
              
              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img3} alt="" />
                </div>
                <p>Франсуа Дюпон</p>
                <h3>Процедура</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>20 000 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img4} alt="" />
                </div>
                <p>Луи Детуш</p>
                <h3>Роза</h3>
                <h6>Бумага, акрил (50х80)</h6>
                <h5>12 000 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img5} alt="" />
                </div>
                <p>Франсуа Дюпон</p>
                <h3>Птичья трапеза</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>22 500 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img6} alt="" />
                </div>
                <p>Пьер Моранж</p>
                <h3>Пейзаж с рыбой</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>20 000 руб</h5>
                <button>В корзину</button>
              </div>

            </div>
            {/* <div className='rep-page'>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img7} alt="" />
                </div>
                <p>Курт Вернер</p>
                <h3>Над городом</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>16 000 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img8} alt="" />
                </div>
                <p>Макс Рихтер</p>
                <h3>Птенцы</h3>
                <h6>Холст, масло (50х80)</h6>
                <h5>14 500 руб</h5>
                <button>В корзину</button>
              </div>
              
              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img9} alt="" />
                </div>
                <p>Мартин Майер</p>
                <h3>Среди листьев</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>20 000 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img10} alt="" />
                </div>
                <p>Герман Беккер</p>
                <h3>Яркая птица</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>13 000 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img11} alt="" />
                </div>
                <p>Вульф Бауэр</p>
                <h3>Дятлы</h3>
                <h6>Бумага, акрил (50х80)</h6>
                <h5>20 000 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img12} alt="" />
                </div>
                <p>Вальтер Хартманн</p>
                <h3>Большие воды</h3>
                <h6>Бумага, акрил (50х80)</h6>
                <h5>23 000 руб</h5>
                <button>В корзину</button>
              </div>

            </div>
            <div className="rep-page">

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img13} alt="" />
                </div>
                <p>Пол Смит</p>
                <h3>Дикий зверь</h3>
                <h6>Акварель, бумага (50х80)</h6>
                <h5>19 500 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img14} alt="" />
                </div>
                <p>Джон Уайт</p>
                <h3>Скалистый берег</h3>
                <h6>БЦветная литография (40х60)</h6>
                <h5>17 500 руб</h5>
                <button>В корзину</button>
              </div>
              
              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img15} alt="" />
                </div>
                <p>Джим Уотсон</p>
                <h3>Река и горы</h3>
                <h6>Акварель, бумага (50х80)</h6>
                <h5>20 500 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img16} alt="" />
                </div>
                <p>Юджин Зиллион</p>
                <h3>Белый попугай</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>15 500 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img17} alt="" />
                </div>
                <p>Эрик Гиллман</p>
                <h3>Ночная рыба</h3>
                <h6>Бумага, акрил (50х80)</h6>
                <h5>12 500 руб</h5>
                <button>В корзину</button>
              </div>

              <div className="rep-box">
                <div className="rep-box__img">
                  <img src={img18} alt="" />
                </div>
                <p>Альфред Барр</p>
                <h3>Рыжий кот</h3>
                <h6>Цветная литография (40х60)</h6>
                <h5>21 000 руб</h5>
                <button>В корзину</button>
              </div>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default rep;