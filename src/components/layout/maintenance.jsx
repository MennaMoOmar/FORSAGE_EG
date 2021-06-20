import React from "react";

import Slider from "../sliderMaintenance";

const Maintenance = () => {
  return (
    <React.Fragment>
      <div className="maintenance">
        <div className="maintenance__container">
          <div className="maintenance__container__slider">
            <Slider />
          </div>
          <div className="maintenance__container__middle">
            <div>
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
                  src="/images/maintenenance/Underconstruction.gif"
                  alt=""
                />
              </div>
              <div className="maintenance__container__title mb-5 pb-5">
                <h2>الصفحة تحت الانشاء</h2>
              </div>
            </div>

            <div className="maintenance__container__slider__forMobile">
              <Slider />
            </div>
          </div>

          <div className="maintenance__container__side__image">
            <img
              className="maintenance__container__side__image__img"
              src="/images/maintenenance/bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Maintenance;
