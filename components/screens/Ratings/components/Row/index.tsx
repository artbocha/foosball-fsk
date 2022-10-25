import cn from "classnames";
import type {PlayerState} from "../../../../../types";

import css from "./styles.module.css";

const RANK_MAP_STYLE = {
  MASTER: css.rank__master,
  PRO: css.rank__pro,
  SEMIPRO: css.rank__semipro,
  AMATEUR: css.rank__amateur,
  NOVICE: css.rank__novice,
  BEGINNER: css.rank__beginner,
};

type Props = {
  state: PlayerState;
  position: number;
};

const Row = ({state, position}: Props) => {
  const {player, ratings, evks_rank} = state;
  const {first_name, last_name} = player;
  const {EVKS} = ratings;

  return (
    <tr>
      <td className={css.position}>{position}</td>
      <td className={css.name}>{`${first_name} ${last_name}`}</td>
      <td className={css.evks}>{EVKS}</td>
      <td>
        <div className={cn(css.rank, RANK_MAP_STYLE[evks_rank])}>
          {evks_rank}
        </div>
      </td>
    </tr>
  );
};

export default Row;
