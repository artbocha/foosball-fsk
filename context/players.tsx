import {createContext, useContext, useState, useCallback} from "react";
import type {ParsedUrlQuery} from "querystring";

import {PlayerState} from "../types";
import {fetchPlayers} from "../api";

const PlayersContext = createContext(undefined);

export function PlayersProvider({children}) {
  const [players, setPlayers] = useState<PlayerState[]>([]);

  const getAndUpdatePlayers = useCallback(
    async (query: ParsedUrlQuery) => {
      const newPlayers = await fetchPlayers(query);

      setPlayers(newPlayers);
    },
    [setPlayers]
  );

  return (
    <PlayersContext.Provider
      value={{
        players,
        setPlayers,
        getAndUpdatePlayers,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}

export function usePlayers() {
  const context = useContext(PlayersContext);

  if (!context)
    throw new Error("usePlayers must be used inside a `PlayersProvider`");

  return context;
}
