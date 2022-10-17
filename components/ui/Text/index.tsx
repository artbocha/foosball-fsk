import css from "./styles.module.css";

const Text = ({children}) => {
  return <div className={css.text}>{children}</div>;
};

export default Text;
