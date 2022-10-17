import css from "./styles.module.css";

type Props = {
  text: string;
};

const Title = ({text}: Props) => {
  return <h1 className={css.title}>{text}</h1>;
};

export default Title;
