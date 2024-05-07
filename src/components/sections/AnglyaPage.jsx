import React from "react";
import img13 from "../../../public/imgs/repimg13.jpg";
import img14 from "../../../public/imgs/repimg14.jpg";
import img15 from "../../../public/imgs/repimg15.jpg";
import img16 from "../../../public/imgs/repimg16.jpg";
import img17 from "../../../public/imgs/repimg17.jpg";
import img18 from "../../../public/imgs/repimg18.jpg";
export default function AnglyaPage() {
  return (
    <div className="all">
      <div className="rep-page">
        <div className="all-mini-block">
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
        </div>
        <div className="all-mini-block">
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
        </div>
      </div>
    </div>
  );
}
