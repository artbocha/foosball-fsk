import Image from "next/image";

import css from "./styles.module.css";

const SliderItem = ({title, description, icon, active}) => {
  if (!active) return null;

  return (
    <div className={css.slide}>
      <div className={css.text}>
        <div className={css.title}>{title}</div>
        <div className={css.description}>{description}</div>
      </div>

      <div className={css.icon}>
        <Image
          layout="responsive"
          width={272}
          height={86}
          src={`/${icon}.svg`}
          alt={icon}
        />
      </div>
    </div>
  );
};

export default SliderItem;
