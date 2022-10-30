import {useEffect} from "react";

import {fetchPlayers} from "api";
import type {PlayerState} from "../types";
import RatingPage from "../components/screens/Ratings";
import {PlayersProvider, usePlayers} from "../context/players";

export const getServerSideProps = async ({query}) => {
  const players = await fetchPlayers(query);

  if (!players) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      playerStates: players,
    },
  };
};

type Props = {
  playerStates: PlayerState[];
};

const Ratings = ({playerStates}: Props) => {
  const {setPlayers} = usePlayers();

  useEffect(() => {
    setPlayers(playerStates);
  }, [playerStates, setPlayers]);

  return <RatingPage />;
};

Ratings.getContextProvider = (page) => (
  <PlayersProvider>{page}</PlayersProvider>
);

export default Ratings;
