import {FC} from "react";

import type {PlayerCompetition} from "../../../../../types";

type Props = {
  competition: PlayerCompetition;
};

const Row: FC<Props> = ({competition}) => {
  return (
    <tr>
      <td>{competition.competition_type}</td>
      <td>{competition.start_datetime}</td>
      <td>{competition.end_datetime}</td>
      <td>{competition.evks_importance_coefficient}</td>
      <td>{competition.cumulative_coefficient}</td>
    </tr>
  );
};

export default Row;
