import Image from "next/image";
import css from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.logo}>
        <Image width={79} height={40} src="/logo.svg" alt="ФСК" />
      </div>
      <div className={css.links}>
        <Image width={24} height={24} src="/tabMenu.svg" alt="меню" />
      </div>
    </nav>
  );
};

export default Navbar;
