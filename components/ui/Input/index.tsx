import css from "./styles.module.css";

// type Props = {};

const Input = () => {
  return (
    <div className={css.inputContainer}>
      <input placeholder="Имя или фамилия игрока" />
    </div>
  );
};

export default Input;
