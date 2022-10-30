import type {ParsedUrlQuery} from "querystring";

export const fetchPlayers = async ({
  active_only = "true",
  rating_type = "EVKS",
}: ParsedUrlQuery) => {
  const queryStr = `?active_only=${active_only}&rating_type=${rating_type}`;
  const path = `/ratings_state${queryStr}`;

  const URL =
    typeof window === "undefined" // the check to define call environment that can be 'node' or 'browser'
      ? `${process.env.WEBAPP_BACKEND_URL}${path}`
      : `api/${path}`;

  const response = await fetch(URL);
  const {player_states} = await response.json();

  return player_states;
};
