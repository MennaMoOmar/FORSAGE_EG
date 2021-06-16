import React from "react";

import Slider from "../sliderMaintenance";

const Maintenance = () => {
  return (
    <React.Fragment>
      <div className="maintenance">
        <div className="maintenance__container row">
          <div className="col-3">
            <div className="maintenance__container__slider">
              <Slider />
            </div>
          </div>
          <div className="col-5 mb-5 pb-4">
            <div className="maintenance__container__header">
              <img
                className="maintenance__container__header__img"
                src="/images/logo02.png"
                alt=""
              />
              <h5 className="maintenance__container__header__h5">
                لاستيراد المعدات اليدوية والادوات الكهربية
              </h5>
            </div>
            <div className="maintenance__container__image">
              <img
                className="maintenance__container__image__img"
                src="/images/Underconstruction.gif"
                alt=""
              />
            </div>
            <div className="maintenance__container__title">
              <h2>الصفحة تحت الانشاء</h2>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Maintenance;
