import css from "./styles.module.css";

type Props = {
  direction: "row" | "column";
};

const Divider = ({direction = "row"}) => {
  if (direction === "column") {
    return <div className={css.columnDivider} />;
  }

  return <div className={css.divider} />;
};

export default Divider;
