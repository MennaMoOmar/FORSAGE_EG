import React from "react";

const Maintenance = () => {
  
  return (
    <React.Fragment>
      <div className="maintenance">
        <div className="maintenance__container">
            <div className="maintenance__container__header">
                <img className="maintenance__container__header__img" src="/images/logo02.png" alt=""/>
            </div>
            <div className="maintenance__container__image">
                <img className="maintenance__container__image__img" src="/images/Underconstruction.gif" alt=""/>
            </div>
            <div className="maintenance__container__title">
                <h2>الصفحة تحت الانشاء</h2>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default Maintenance;
