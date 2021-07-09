import { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../actions";
import FontAwesome from "react-fontawesome";

const AddCategoryModal = ({ closeModal, addCategory }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, image });

    if (name && image) {
      addCategory(image, name);
    }
    setName("");
    setImage("");
    closeModal();
  };

  const closeicon = () => (
    <FontAwesome
      name="times"
      onClick={closeModal}
      style={{
        color: "#000000",
        padding: "10px",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: 0,
        position: "absolute",
        top: "0.3rem",
        left: "0.5rem",
      }}
    />
  );
  return (
    <div className="addCategoryModal">
      <div className="Modal__overlay">
        <div className="Modal__content" dir="rtl">
          {closeicon()}
          <div className="container">
            <h6 className="Modal__title">إضافة مصنع جديد</h6>
            <form>
              <input
                className="addCategory__input"
                placeholder=" اسم المصنع"
                required
                type="text"
                id="categoryName"
                name="categoryName"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <span className="addCategory__imageUpload__label">
                شعار أو صورة المصنع
              </span>
              <div className="addCategory__imageUpload">
                <div className="addCategory__imageUpload__filename">
                  {image && image.name}
                </div>
                <label
                  for="fileInput"
                  className="addCategory__imageUpload__btn"
                >
                  Browse file
                </label>

                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  required
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  hidden
                />
              </div>
            </form>
            <div className="Modal__actions">
              <button
                className="addCategory__button"
                onClick={(e) => handleSubmit(e)}
              >
                حفظ المصنع
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, { addCategory })(AddCategoryModal);
