import React from "react";
import img1 from "../../../public/imgs/repimg1.jpg";
import img2 from "../../../public/imgs/repimg2.jpg";
import img3 from "../../../public/imgs/repimg3.jpg";
import img4 from "../../../public/imgs/repimg4.jpg";
import img5 from "../../../public/imgs/repimg5.jpg";
import img6 from "../../../public/imgs/repimg6.jpg";


import { Routes, Route, Link } from "react-router-dom";
import GermaniyaPage from "./GermaniyaPage";
import AnglyaPage from "./AnglyaPage";

function rep() {
  return (
      <div id="rep" className="rep">

        <div className="container">
        <Routes>
          <Route path="GermaniyaPage" element={<GermaniyaPage />} />
          <Route path="AnglyaPage" element={<AnglyaPage />} />
        </Routes>
          <div className="rep-row">
            <div className="rep-header">
              <h3>Репродукции</h3>
              <div className="rep-buttons">
              <Link to="/app">Франция</Link>
              <Link to="/GermaniyaPage">Германия</Link>
              <Link to="/AnglyaPage">Англия</Link>
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
            </div>
          </div>
        </div>
      </div>
  );
}

export default rep;
