import Input from "@ui/Input";
import type {PlayerState} from "../../../types";

import PlayersTable from "./components/PlayersTable";

import css from "./styles.module.css";

type Props = {
  playerStates: PlayerState[];
};

const Ratings = ({playerStates}: Props) => {
  return (
    <div className={css.page}>
      <Input />
      <PlayersTable playerStates={playerStates} />
    </div>
  );
};

export default Ratings;
