import {FC} from "react";
import css from "./styles.module.css";

type Props = {
  text: string;
};

const Title: FC<Props> = ({text}) => {
  return <h1 className={css.title}>{text}</h1>;
};

export default Title;
