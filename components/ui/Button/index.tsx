import css from "./styles.module.css";

const Button = ({name, onClick}) => {
  return (
    <button className={css.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
