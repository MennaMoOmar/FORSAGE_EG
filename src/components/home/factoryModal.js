import FactorySlider from "./factorySlider";

const FactoryModal = ({ closeModal }) => {
  return (
    <div className="FactoryModal">
      <div className="Modal__overlay">
        <div className="Modal__content">
          <div className="container">
            <div className="factoryModalheader">
              <h4 className="Modal__title">
                الوكيل الحصرى بجمهورية مصر العربية شركة فورساج لاستراد المعدات و
                الأدوات الكهربائية
              </h4>
              <button className="button mainbtn" onClick={closeModal}>
                تصفح موقعنا
              </button>
            </div>

            <FactorySlider></FactorySlider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FactoryModal;
