import React, {FC, useCallback} from "react";
//import {useRouter} from "next/router";

import {usePlayerCompetitions} from "../../../context/playerCompetitions";
import PlayerCompetitionsTable from "./components/PlayerCompetitionsTable";

const PlayerCompetitions: FC = () => {
  const {competitions} = usePlayerCompetitions();
  //const router = useRouter();
  //const {query} = router;

  return (
    <PlayerCompetitionsTable competitions={competitions} />
  );
};

export default PlayerCompetitions;
