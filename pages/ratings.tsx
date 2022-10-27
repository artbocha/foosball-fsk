import type {PlayerState} from "../types";
import RatingPage from "../components/screens/Ratings";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.WEBAPP_BACKEND_URL}/ratings_state?active_only=true&rating_type=EVKS`
  );
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
