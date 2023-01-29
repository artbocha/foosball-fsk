import {FC} from "react";
import cn from "classnames";
import Link from "next/link";

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

const Row: FC<Props> = ({state, position}) => {
  const {player_name, rating, evks_rank, player_id} = state;

  // I'll just keep it here for now, f**k jsx..
  // <Link href={`/player/${player_id}/competitions`}>*/

  return (
    <tr>
      <td className={css.position}>{position}</td>
      <td className={css.name}>
        <Link href="/playerCompetitions">
          <a>{player_name}</a>
        </Link>
      </td>
      <td className={css.evks}>{rating}</td>
      <td>
        <div className={cn(css.rank, RANK_MAP_STYLE[evks_rank])}>
          {evks_rank}
        </div>
      </td>
    </tr>
  );
};

export default Row;
