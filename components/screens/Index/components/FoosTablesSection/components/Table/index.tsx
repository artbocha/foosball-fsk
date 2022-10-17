import Image from "next/image";

import css from "./styles.module.css";

const Table = ({table}) => {
  const {key, name} = table;

  return (
    <div className={css.table}>
      {key && <Image width={32} height={27} src={`/${key}.svg`} alt={key} />}
      <div className={css.name}>{name}</div>
    </div>
  );
};

export default Table;
