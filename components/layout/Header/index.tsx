import Navbar from "../Navbar";
import css from "./styles.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.topBar} />
      <Navbar />
    </header>
  );
};

export default Header;
