import {useEffect} from "react";

import {fetchPlayerCompetitions} from "api";
import type {PlayerCompetition} from "../types";
import { PlayerCompetitionsProvider, usePlayerCompetitions } from "../context/playerCompetitions";
import PlayerCompetitionsPage from "../components/screens/PlayerCompetitions";

const playerId = 1;

export const getServerSideProps = async () => {
  const competitions = await fetchPlayerCompetitions(playerId);

  if (!competitions) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      competitions: competitions,
    }
  };
};

type Props = {
    competitions: PlayerCompetition[];
};

const PlayerCompetitions = ({competitions}: Props) => {
  const {setCompetitions} = usePlayerCompetitions();

  useEffect(() => {
    setCompetitions(competitions);
  }, [competitions, setCompetitions]);

  return <PlayerCompetitionsPage />;
};

PlayerCompetitions.getContextProvider = (page) => (
  <PlayerCompetitionsProvider>{page}</PlayerCompetitionsProvider>
);

export default PlayerCompetitions;