import React, {FC} from "react";
import cn from "classnames";
import css from "./styles.module.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled?: boolean;
  value: boolean;
};

const Switch: FC<Props> = ({onChange, label, disabled, value = false}) => {
  return (
    <div className={css.container}>
      <label className={css.switch}>
        <input
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          checked={value}
        />
        <span className={cn(css.slider, css.round)}></span>
      </label>
      <span className={css.label}>{label}</span>
    </div>
  );
};

export default Switch;
