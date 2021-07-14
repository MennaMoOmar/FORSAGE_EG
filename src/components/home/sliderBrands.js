import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: "images/maintenenance/1.png",
  },
  {
    imgPath: "images/maintenenance/2.png",
  },
  {
    imgPath: "images/maintenenance/3.png",
  },
  {
    imgPath: "images/maintenenance/4.png",
  },
  {
    imgPath: "images/maintenenance/5.png",
  },
  {
    imgPath: "images/maintenenance/6.png",
  },
  {
    imgPath: "images/maintenenance/7.png",
  },
  {
    imgPath: "images/maintenenance/8.jpg",
  },
  {
    imgPath: "images/maintenenance/9.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "max-width",
    height: "max-height",

    flexGrow: 1,
    margin: "2rem auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    // paddingLeft: theme.spacing(4),
    // backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "max-height",
    display: "block",
    overflow: "hidden",
    margin: "auto",
  },
}));

function BrandsSlider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="brandsSliderContainer row">
      {/* <h2>العلامات التجارية</h2> */}
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </div>
  );
}

export default BrandsSlider;
