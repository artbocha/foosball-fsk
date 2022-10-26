import React, {useState, useEffect, useCallback} from "react";
import Input from "@ui/Input";
import Switch from "@ui/Switch";
import type {PlayerState} from "../../../types";

import PlayersTable from "./components/PlayersTable";

import css from "./styles.module.css";

type Props = {
  playerStates: PlayerState[];
};

const Ratings = ({playerStates}: Props) => {
  const [filteredPlayerStates, setStates] = useState([]);

  useEffect(() => {
    setStates(playerStates);
  }, [playerStates]);

  const toggleActivePlayers = useCallback(
    ({target: {checked}}: React.ChangeEvent<HTMLInputElement>) => {
      const newStates = checked
        ? playerStates.filter((p) => p.is_evks_player_active)
        : playerStates;

      setStates(newStates);
    },
    [playerStates]
  );

  const toggleForeignPlayers = useCallback(() => {
    console.error('NOT IMPLEMENTED "toggleForeignPlayers"');
  }, []);

  return (
    <div className={css.page}>
      <Input />
      <Switch
        disabled
        onChange={toggleForeignPlayers}
        label="Показывать заморских"
      />
      <Switch onChange={toggleActivePlayers} label="Показывать пассивных" />
      <PlayersTable playerStates={filteredPlayerStates} />
    </div>
  );
};

export default Ratings;
