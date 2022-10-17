import css from "./styles.module.css";
import type {City} from "./types";

type Props = {
  city: City;
};

const CityItem = ({city}: Props) => {
  const {key, name, url} = city;

  return (
    <a className={css.city} href={url} target="_blank" rel="noreferrer">
      <div className={css.shortName}>{key}</div>
      <div className={css.name}>{name}</div>
    </a>
  );
};

export default CityItem;
