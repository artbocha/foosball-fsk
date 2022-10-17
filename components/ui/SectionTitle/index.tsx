import Image from "next/image";

import css from "./styles.module.css";

type Props = {
  title: string;
  icon?: string;
};

const SectionTitle = ({icon, title}: Props) => {
  return (
    <div className={css.sectionTitle}>
      {icon && <Image width={24} height={24} src={`/${icon}.svg`} alt={icon} />}
      <span className={css.title}>{title}</span>
    </div>
  );
};

export default SectionTitle;
