import type {PlayerState} from "../types";
import RatingPage from "../components/screens/Ratings";

export const getStaticProps = async () => {
  const response = await fetch("https://new.rtsf.ru/ratings_state");
  const data = await response.json();
  const {player_states} = data;

  if (!player_states) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      playerStates: player_states,
    },
  };
};

type Props = {
  playerStates: PlayerState[];
};

const Ratings = ({playerStates}: Props) => {
  return <RatingPage playerStates={playerStates} />;
};

export default Ratings;
