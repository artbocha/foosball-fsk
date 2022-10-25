export type Player = {
  city: string;
  id: number;
  first_name: string;
  last_name: string;
};

export type Ratings = {
  EVKS: number;
  CUMULATIVE: number;
};

export type PlayerState = {
  evks_rank: string;
  is_evks_rating_active: boolean;
  player: Player;
  ratings: Ratings;
};
