export type PlayerState = {
  evks_rank: string;
  is_evks_player_active: boolean;
  player_name: string;
  rating: number;
  player_id: number;
};

export type PlayerCompetition = {
  id: number;
  start_datetime: string;
  end_datetime: string;
  cumulative_coefficient: number;
  evks_importance_coefficient: number;
  competition_type: string;
};