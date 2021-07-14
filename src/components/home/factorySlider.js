import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const tutorialSteps = [
  {
    imgPath: "images/opening/1.jpg",
  },
  {
    imgPath: "images/opening/2.jpg",
  },
  {
    imgPath: "images/opening/3.jpg",
  },
  {
    imgPath: "images/opening/4.jpg",
  },
  {
    imgPath: "images/opening/5.jpg",
  },
  {
    imgPath: "images/opening/6.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
    margin: "auto",
  },
  img: {
    // height: 255,
    maxWidth: 500,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

export default function FactorySlider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  );
}
