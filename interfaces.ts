export interface ITab {
  label: string;
  path: string;
}

export interface ITabs extends Array<ITab> {}

export interface IReview {
  name: string;
  comment: string;
  stars: number;
  picture: string;
}

export interface IReviews extends Array<IReview> {}
