import {FC} from "react";

import Row from "../Row";

import type {PlayerCompetition} from "../../../../../types";

type Props = {
  competitions: PlayerCompetition[];
};

const PlayerCompetitionsTable: FC<Props> = ({competitions}) => {
  return (
    <table cellSpacing="0" cellPadding="0">
      <tbody>
        {competitions.map((competition) => (
          <Row key={competition.id} competition={competition} />
        ))}
      </tbody>
    </table>
  );
};

export default PlayerCompetitionsTable;
