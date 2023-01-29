import {createContext, useContext, useState, useCallback} from "react";

import {PlayerCompetition} from "../types";
import {fetchPlayerCompetitions} from "../api";

const PlayerCompetitionsContext = createContext(undefined);

const playerId = 1;

export function PlayerCompetitionsProvider({children}) {
  const [competitions, setCompetitions] = useState<PlayerCompetition[]>([]);

  const getAndUpdateCompetitions = useCallback(
    async () => {
      const newCompetitions = await fetchPlayerCompetitions(playerId);
      setCompetitions(newCompetitions);
    },
    [setCompetitions]
  );

  return (
    <PlayerCompetitionsContext.Provider
      value={{
        competitions,
        setCompetitions,
        getAndUpdateCompetitions,
      }}
    >
      {children}
    </PlayerCompetitionsContext.Provider>
  );
}

export function usePlayerCompetitions() {
  const context = useContext(PlayerCompetitionsContext);

  if (!context)
    throw new Error("usePlayerCompetitions must be used inside a `PlayerCompetitionsProvider`");

  return context;
}
