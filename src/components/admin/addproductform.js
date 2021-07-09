import ClearIcon from "@material-ui/icons/Clear";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import {
  addProduct,
  editProduct,
  getAllCategories,
  getProductById,
  setAlert,
} from "../../actions";
import AddCategoryModal from "./addCategoryModal";

const AddProductForm = ({
  setAlert,
  isAdmin: { isAdmin, admin },
  categories,
  product,
  getAllCategories,
  addProduct,
  editProduct,
  getProductById,
  id,
}) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      code,
      description,
      price,
      categoryId,
      image,
    });
    console.log({ categoryId });
    if (image && name && price && code && description && categoryId) {
      if (id) {
        editProduct(image, name, price, code, description, categoryId, id);
      } else {
        addProduct(image, name, price, code, description, categoryId);
      }

      setName("");
      setCode("");
      setDescription("");
      setPrice("");
      setCategoryId("");
      setCategoryName("");
      setImage("");
      setPreviewImage(null);
    } else {
      setAlert("All Fields are required", "error");
    }
  };

  // console.log(categories)

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  useEffect(() => {
    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].name === categoryName) {
          setCategoryId(categories[i]._id);
          break;
        }
      }
    }
  }, [categoryName, categories]);

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [getProductById, id]);

  useEffect(() => {
    setName(product?.name);
    setCode(product?.code);
    setDescription(product?.description);
    setPrice(product?.price);
    setCategoryId(product?.categoryId?._id);
    setCategoryName(product?.categoryId?.name);
    setImage(product?.productImage);

    if (product) {
      setPreviewImage(`data:image/png;base64, ${product?.productImage}`);
    }
  }, [product]);

  if (!isAdmin && !admin) {
    return <Redirect to="/login" />;
  }

  console.log(categoryId, categoryName);

  return (
    <>
      {status && (
        <AddCategoryModal
          closeModal={() => setStatus(false)}
        ></AddCategoryModal>
      )}
      <div className="addProduct">
        <form dir="rtl" className="addProduct__form">
          <input
            className="addProduct__input"
            placeholder="اسم المنتج"
            required
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="addProduct__input"
            placeholder="الكود"
            required
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <textarea
            className="addProduct__input"
            placeholder="الوصف"
            rows="5"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            className="addProduct__input"
            placeholder="السعر"
            required
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <select
            className="addProduct__input__select"
            dir="rtl"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          >
            <option value="" disabled hidden defaultValue>
              اختر اسم المصنع
            </option>

            {categories &&
              categories.map((category) => {
                return (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
          </select>
          <div className="addNewCategoryBtnWrapper">
            <button
              className="mainbtn addNewCategoryBtn"
              onClick={(e) => {
                e.preventDefault();
                setStatus(true);
              }}
            >
              إضافة مصنع جديد
            </button>
          </div>
          <span className="addProduct__imageTextUpload"> رفع صور المنتج </span>

          <div className="addProduct__imageUpload">
            {previewImage ? (
              <>
                <img src={previewImage} alt="Preview" />
                <ClearIcon
                  onClick={() => {
                    setImage("");
                    setPreviewImage(null);
                  }}
                  className="clearIcon"
                />
              </>
            ) : (
              <>
                <label
                  for="fileInput"
                  className="addProduct__imageUpload__label"
                >
                  Browse file
                </label>
                <input
                  id="fileInput"
                  name="fileInput"
                  type="file"
                  hidden
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </>
            )}
          </div>
          <button
            className="addProduct__button"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {id ? "حفظ التغيرات" : "إضافة المنتج"}
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.userReducer,
    categories: state.categoryReducer.categories,
    product: state.productReducer.product,
  };
};

export default connect(mapStateToProps, {
  getAllCategories,
  addProduct,
  editProduct,
  getProductById,
  setAlert,
})(AddProductForm);
