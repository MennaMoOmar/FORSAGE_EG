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
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddProductForm = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [code, setCode] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, code, description, price, categoryId });
  };

  return (
    <>
      <div className="addProduct">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="اسم المنتج"
            className="addProduct__inputform"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="الكود"
            className="addProduct__inputform"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <TextField
            className="addProduct__inputform"
            margin="dense"
            id="name"
            multiline
            rows={9}
            defaultValue=""
            variant="outlined"
            label="الوصف"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="السعر بالجملة"
            className="addProduct__inputform"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <InputLabel id="demo-simple-select-label">اختر اسم المصنع</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <button
            className="button mainbtn"
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

export default AddProductForm;
