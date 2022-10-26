import Row from "../Row";
import css from "./styles.module.css";

import type {PlayerState} from "../../../../../types";

type Props = {
  playerStates: PlayerState[];
};

const PlayersTable = ({playerStates}: Props) => {
  return (
    <table className={css.table} cellSpacing="0" cellPadding="0">
      <tbody>
        {playerStates.map((state, index) => (
          <Row key={state.player_name} state={state} position={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default PlayersTable;
