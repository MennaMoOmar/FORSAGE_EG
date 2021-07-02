import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { addCategory } from "../../actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  AddCategoryMainBtn: {
    backgroundColor: "#54656D",
    color: "white",
    display: "flex",
    justifyContent: "end",
  },
  imageUploadbtn: {
    backgroundColor: "#54656D",
    color: "white",
  },
  AddCategoryBtn: {
    width: "100%",
  },
  addCategory__header: {
    textAlign: "center",
    color: "#3e3d42",
  },
  addCategoryModal__container: {
    padding: theme.spacing(2),
  },
}));

const AddCategoryModal = ({ addCategory }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className={`${classes.AddCategoryMainBtn}`}
      >
        إضافة مصنع جديد
      </Button>
      <Dialog
        className={classes.addCategoryModal__container}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
      >
        <DialogTitle id="responsive-dialog-title">
          <Typography variant="h6" className={classes.addCategory__header}>
            إضافة مصنع جديد
          </Typography>
        </DialogTitle>

        <DialogContent>
          <TextField
            dir="rtl"
            fullWidth
            className="addCategory__inputform"
            id="filled-basic"
            label="اسم المصنع"
            variant="filled"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <DialogContentText dir="rtl"> شعار او صورة المصنع </DialogContentText>

          <div className="addCategory__imageUpload">
            <Button component="label" className={classes.imageUploadbtn}>
              Browse File
              <input
                type="file"
                hidden
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </Button>
            {image && image.name}
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className={`${classes.AddCategoryBtn} addProduct__button`}
            onClick={(e) => handleSubmit(e)}
          >
            حفظ المصنع
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null, { addCategory })(AddCategoryModal);
