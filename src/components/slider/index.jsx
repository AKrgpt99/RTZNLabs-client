import React, { useEffect } from "react";
import clsx from "clsx";

import useStyles from "./styles";

function Slider({ slides, slideIndex, onChange, timer }) {
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      onChange((slideIndex + 1) % slides.length);
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [slideIndex, slides]);

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
      </div>
    </>
  );
}

Slider.defaultProps = {
  timer: 10000,
};

export default Slider;
