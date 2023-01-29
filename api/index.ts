import type {ParsedUrlQuery} from "querystring";
import {PlayerCompetition} from "../types/index";

const baseUrl =
  typeof window === "undefined" // the check to define call environment that can be 'node' or 'browser'
  ? process.env.WEBAPP_BACKEND_URL
  : 'api';

const getUrl = (resourcePath: string) => {
  return `${baseUrl}${resourcePath}`;
};

export const fetchPlayers = async ({
  active_only = "true",
  rating_type = "EVKS",
}: ParsedUrlQuery) => {
  const queryStr = `?active_only=${active_only}&rating_type=${rating_type}`;
  const url = getUrl(`/ratings_state${queryStr}`);

  const response = await fetch(url);
  const {player_states} = await response.json();

  return player_states;
};

export const fetchPlayerCompetitions = async (playerId: number): Promise<PlayerCompetition[]> => {
  const url = getUrl(`/players/${playerId}/competitions`);

  const response = await fetch(url);
  const playerCompetitions = await response.json();

  return playerCompetitions;
};