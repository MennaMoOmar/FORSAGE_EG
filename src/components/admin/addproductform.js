// import React from "react";
// import { connect } from "react-redux";

// import { addProduct } from "../../actions";

// const AddProductForm = (props) => {
//   const { addProduct } = props;

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const image = e.target[0].files[0];
//     const name = e.target[1].value;
//     const price = e.target[2].value;
//     const code = e.target[3].value;
//     const description = e.target[4].value;
//     const categoryId = e.target[5].value;
//     addProduct(image, name, price, code, description, categoryId);
//   };

//   return (
//     <>
//       <div className="addproductform">
//         <div className="container">
//           <form
//             className="addproductform__form"
//             onSubmit={(e) => submitHandler(e)}
//           >
//             <div className="row">
//               <div className="col-lg-12">
//                 <input
//                   type="file"
//                   id="file"
//                   className="imageUpload"
//                   name="file"
//                   accept=".png, .jpg"
//                   required
//                 />
//                 <input
//                   className="addproductform__form__input input is-link"
//                   type="text"
//                   placeholder="Name"
//                   id="name"
//                   name="name"
//                   required
//                 />
//                 <input
//                   className="addproductform__form__input input is-link"
//                   type="text"
//                   placeholder="Price"
//                   id="price"
//                   name="price"
//                   required
//                 />
//                 <input
//                   className="addproductform__form__input input is-link"
//                   type="text"
//                   placeholder="Code"
//                   id="code"
//                   name="code"
//                   required
//                 />
//                 <input
//                   className="addproductform__form__input input is-link"
//                   type="text"
//                   placeholder="Description"
//                   id="description"
//                   name="description"
//                   required
//                 />
//                 <input
//                   className="addproductform__form__input input is-link"
//                   type="text"
//                   placeholder="CategoryId"
//                   id="CategoryId"
//                   name="CategoryId"
//                   required
//                 />
//               </div>
//             </div>
//             <button className="addproductform__form__btn--save  button is-rounded">
//               Add
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// // mapStateToProps
// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addProduct: (image, name, price, code, description, categoryId) =>
//       dispatch(addProduct(image, name, price, code, description, categoryId)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);

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
import { connect } from "react-redux";
import { getAllCategories } from "../../actions/categoryAction";
import { addProduct } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "70ch",
    },
  },
  addcategory: {
    width: "25ch",
  },
  clearIcon: {
    color: "red",
    cursor: "pointer",
  },
}));

const AddProductForm = ({ categories, getAllCategories, addProduct }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

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
      addProduct(image, name, price, code, description, categoryId);
    }
  };

  console.log(categories);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <>
      <h5 className="addProduct__header">إضافة منتج جديد</h5>
      <div className="addProduct">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
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
          <button className={`${classes.addcategory} mainbtn`}>
            إضافة مصنع جديد
          </button>

          <span className="addProduct__imageTextUpload"> رفع صور المنتج </span>

          <div className="addProduct__imageUpload">
            {previewImage ? (
              <>
                <img src={previewImage} alt="Preview" />
                <ClearIcon
                  onClick={() => setPreviewImage(null)}
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
            إضافة المنتج
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
  };
};

export default connect(mapStateToProps, { getAllCategories, addProduct })(
  AddProductForm
);
