import cn from "classnames";

import css from "./styles.module.css";

const Button = ({children, onClick, className}) => {
  return (
    <button className={cn(css.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
