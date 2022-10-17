import css from "./styles.module.css";

const Section = ({children}) => {
  return <div className={css.section}>{children}</div>;
};

export default Section;
