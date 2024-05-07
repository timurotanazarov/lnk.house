import React from "react";
import img7 from "../../../public/imgs/repimg7.jpg";
import img8 from "../../../public/imgs/repimg8.jpg";
import img9 from "../../../public/imgs/repimg9.jpg";
import img10 from "../../../public/imgs/repimg10.jpg";
import img11 from "../../../public/imgs/repimg11.jpg";
import img12 from "../../../public/imgs/repimg12.jpg";
export default function GermaniyaPage() {
  return (
    <div className="all">
      <div className="rep-page">
        <div className="all-mini-block">
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
        </div>
        <div className="all-mini-block">
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
      </div></div>
    </div>
  );
}
