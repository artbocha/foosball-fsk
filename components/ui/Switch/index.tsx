import React from "react";
import cn from "classnames";
import css from "./styles.module.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled?: boolean;
};

const Switch = ({onChange, label, disabled}: Props) => {
  return (
    <div className={css.container}>
      <label className={css.switch}>
        <input type="checkbox" onChange={onChange} disabled={disabled} />
        <span className={cn(css.slider, css.round)}></span>
      </label>
      <span className={css.label}>{label}</span>
    </div>
  );
};

export default Switch;
