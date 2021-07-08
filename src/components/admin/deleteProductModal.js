import { connect } from "react-redux";
import { deleteProduct } from "../../actions";

const DeleteProductModal = ({ closeModal, id, deleteProduct }) => {
  return (
    <div className="deleteProductModal">
      <div className="Modal__overlay" onClick={closeModal}>
        <div className="Modal__content" dir="rtl">
          {/* {props.children}  */}
          <h6 className="Modal__title"> هل أنت متأكد من حذف هذا المنتج؟</h6>
          <div className="Modal__actions">
            <button
              className="mainbtn delete"
              onClick={() => deleteProduct(id)}
            >
              نعم، تأكيد الحذف
            </button>
            <button className="mainbtn cancel" onClick={closeModal}>
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, { deleteProduct })(DeleteProductModal);
