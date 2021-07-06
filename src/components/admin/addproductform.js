import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ClearIcon from "@material-ui/icons/Clear";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { getAllCategories } from "../../actions/categoryAction";
import { addProduct, editProduct, getProductById } from "../../actions";
import AddCategoryModal from "./addCategoryModal";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "70ch",
    },
  },
  clearIcon: {
    color: "red",
    cursor: "pointer",
  },
  addcategory: {
    width: "20ch",
  },
}));

const AddProductForm = ({
  isAdmin: { isAdmin, admin },
  categories,
  product,
  getAllCategories,
  addProduct,
  editProduct,
  getProductById,
  id,
}) => {
  const classes = useStyles();

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
    }
    setName("");
    setCode("");
    setDescription("");
    setPrice("");
    setCategoryId("");
    setCategoryName("");
    setImage("");
    setPreviewImage(null);
  };

  // console.log(categories)

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

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

  return (
    <>
      {status && (
        <AddCategoryModal
          closeModal={() => setStatus(false)}
        ></AddCategoryModal>
      )}
      <div className="addProduct">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            dir="rtl"
            className="addProduct__inputform"
            id="filled-basic"
            label="اسم المنتج"
            variant="filled"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            dir="rtl"
            className="addProduct__inputform"
            id="filled-basic"
            label="الكود"
            variant="filled"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <TextField
            dir="rtl"
            className="addProduct__inputform"
            id="filled-basic"
            label="الوصف"
            multiline
            rows={5}
            variant="filled"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            dir="rtl"
            className="addProduct__inputform"
            id="filled-basic"
            label="السعر بالجملة"
            variant="filled"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-filled-label"
              className="addProduct__inputform"
            >
              اختر اسم المصنع
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            >
              {categories &&
                categories.map((category) => {
                  return (
                    <MenuItem
                      dir="rtl"
                      key={category._id}
                      value={category.name}
                      onClick={() => setCategoryId(category._id)}
                    >
                      {category.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <button
            className={`${classes.addcategory} mainbtn`}
            onClick={(e) => {
              e.preventDefault();
              setStatus(true);
            }}
          >
            إضافة مصنع جديد
          </button>

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
                  className={classes.clearIcon}
                />
              </>
            ) : (
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Upload File
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </Button>
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
})(AddProductForm);
