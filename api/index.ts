import type {ParsedUrlQuery} from "querystring";

const backend_url = process.env.WEBAPP_BACKEND_URL;

const buildUrl = (path) => {
  return typeof window === "undefined" // the check to define call environment that can be 'node' or 'browser'
      ? `${backend_url}${path}`
      : `api${path}`;
};

export const fetchPlayers = async ({
  active_only = "true",
  rating_type = "EVKS",
}: ParsedUrlQuery) => {
  const queryStr = `?active_only=${active_only}&rating_type=${rating_type}`;
  const path = `/ratings_state${queryStr}`;
  const url = buildUrl(path);

  const response = await fetch(url);
  const {player_states} = await response.json();

  return player_states;
};
