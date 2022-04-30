import React from "react";
import clsx from "clsx";

import useStyles from "./styles";

function Slider({ slides, slideIndex, onChange }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sliderContainer}>
        <div className={classes.slider}>
          <img src={slides[slideIndex].src} alt="" />
          <h3 className={classes.sliderTitle}>{slides[slideIndex].title}</h3>
          <p className={classes.sliderSubtitle}>
            {slides[slideIndex].subtitle}
          </p>
        </div>
      </div>
      <div className={classes.sliderIndicators}>
        {slides.map((_, i) => (
          <button
            onClick={() => onChange(i)}
            key={i}
            value={i}
            className={clsx(
              classes.sliderIndicator,
              "transition",
              i === slideIndex ? classes.sliderIndicatorSelected : ""
            )}
          ></button>
        ))}
      </div>
    </>
  );
}

export default Slider;
