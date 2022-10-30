import React, {FC, useCallback} from "react";
import {useRouter} from "next/router";

import Input from "@ui/Input";
import Switch from "@ui/Switch";
import {usePlayers} from "../../../context/players";
import PlayersTable from "./components/PlayersTable";

import css from "./styles.module.css";

const Ratings: FC = () => {
  const {players, getAndUpdatePlayers} = usePlayers();
  const router = useRouter();
  const {query} = router;
  const {active_only} = query;

  const isActiveOnly = active_only !== "false";

  const toggleActivePlayers = useCallback(
    ({target: {checked}}: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = {...query, active_only: !checked};

      router.push(
        {
          pathname: "/ratings",
          query: newQuery,
        },
        undefined,
        {
          shallow: true,
        }
      );

      getAndUpdatePlayers(newQuery);
    },
    [router, query, getAndUpdatePlayers]
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
        value={false}
      />
      <Switch
        onChange={toggleActivePlayers}
        label="Показывать пассивных"
        value={!isActiveOnly}
      />
      <PlayersTable playerStates={players} />
    </div>
  );
};

export default Ratings;
