import {FC, useCallback, useState} from "react";
import cn from "classnames";

import SliderItem from "./components/SliderItem";
import css from "./styles.module.css";
import type {Slides} from "./types";

type Props = {
  slides: Slides[];
};

const Slider: FC<Props> = ({slides}) => {
  const [currentIndex, setIndex] = useState(0);

  const moveLeft = useCallback(() => {
    if (currentIndex - 1 >= 0) {
      setIndex(currentIndex - 1);
    } else {
      setIndex(slides.length - 1);
    }
    return;
  }, [slides, currentIndex]);

  const moveRight = useCallback(() => {
    if (currentIndex + 1 < slides.length) {
      setIndex(currentIndex + 1);
    } else {
      setIndex(0);
    }
    return;
  }, [slides, currentIndex]);

  const onClick = useCallback(
    (event) => {
      const bounds = event.target.getBoundingClientRect();
      const {width, left} = bounds;
      const x = event.clientX - left;

      width / 2 > x ? moveLeft() : moveRight();
    },
    [moveLeft, moveRight]
  );

  return (
    <div className={css.slider}>
      <div className={css.cardSlider} onClick={onClick}>
        {slides.map(({title, description, icon}, index) => (
          <SliderItem
            key={title}
            title={title}
            description={description}
            icon={icon}
            active={index === currentIndex}
          />
        ))}
      </div>
      <div className={css.pointSlider}>
        {slides.map(({title}, index) => (
          <div
            key={title}
            className={cn(
              css.point,
              currentIndex === index && css.point__active
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
