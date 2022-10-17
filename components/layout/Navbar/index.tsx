import {useCallback, useState} from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "@ui/SectionTitle";
import css from "./styles.module.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [setIsExpanded, isExpanded]);

  const expand = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return (
    <nav className={css.navbar}>
      <div className={css.logo}>
        <Image width={79} height={40} src="/logo.svg" alt="ФСК" />
      </div>
      <div className={css.hamburgerIcon} onClick={onClick}>
        <Image width={24} height={24} src="/tabMenu.svg" alt="меню" />
      </div>

      <div
        onClick={expand}
        className={cn(
          css.navigationMenu,
          isExpanded && css.navigationMenu__expanded
        )}
      >
        <ul>
          <li>
            <Link href="/">
              <a>
                <SectionTitle title="Главная" icon="main" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ratings">
              <a>
                <SectionTitle title="Рейтинг" icon="ratings" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
