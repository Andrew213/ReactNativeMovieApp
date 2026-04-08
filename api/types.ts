export interface MovieItem {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string | null;
  enName: string | null;
  names: NameItem[];
  type: MovieType | null;
  typeNumber: number | null;
  year: number | null;
  description: string | null;
  shortDescription: string | null;
  slogan: string | null;
  status: MovieStatus | null;
  facts: FactItem[];
  rating: Rating | null;
  votes: Votes | null;
  movieLength: number | null;
  ratingMpaa: string | null;
  ageRating: string | number | null;
  logo: ImageAsset | null;
  poster: Poster | null;
  backdrop: Backdrop | null;
  videos: Videos | null;
  genres: GenreItem[];
  countries: CountryItem[];
  persons: PersonItem[];
  reviewInfo: ReviewInfo | null;
  seasonsInfo: SeasonInfo[];
  budget: MoneyValue | null;
  fees: Fees | null;
  premiere: Premiere | null;
  similarMovies: RelatedMovie[];
  sequelsAndPrequels: RelatedMovie[];
  watchability: Watchability | null;
  releaseYears?: ReleaseYear[];
  top10: number | null;
  top250: number | null;
  ticketsOnSale: boolean;
  totalSeriesLength: number | null;
  seriesLength: number | null;
  isSeries: boolean;
  audience: AudienceItem[];
  lists: string[];
  networks: Networks;
  updatedAt: string | null;
  createdAt: string | null;
}

export type TrendingMovie = {
  poster_url: string;
  title: string;
  count: number;
  movie_id: number;
};

export type MovieType =
  | "movie"
  | "tv-series"
  | "cartoon"
  | "animated-series"
  | "anime";

export type MovieStatus =
  | "announced"
  | "completed"
  | "filming"
  | "post-production"
  | "pre-production";

export interface ExternalId {
  kpHD: string | null;
  imdb: string | null;
  tmdb: number | null;
}

export interface NameItem {
  name: string;
  language: string | null;
  type: string | null;
}

export interface FactItem {
  value: string;
  type: string | null;
  spoiler: boolean | null;
}

export interface Rating {
  kp?: number | null;
  imdb?: number | null;
  tmdb?: number | null;
  filmCritics?: number | null;
  russianFilmCritics?: number | null;
  await?: number | null;
}

export interface Votes {
  kp?: number | null;
  imdb?: number | null;
  tmdb?: number | null;
  filmCritics?: number | null;
  russianFilmCritics?: number | null;
  await?: number | null;
}

export interface ImageAsset {
  url?: string | null;
  previewUrl?: string | null;
}

export interface Poster {
  url?: string | null;
  previewUrl?: string | null;
}

export interface Backdrop {
  url?: string | null;
  previewUrl?: string | null;
}

export interface Videos {
  trailers?: VideoItem[];
  teasers?: VideoItem[];
}

export interface VideoItem {
  url?: string | null;
  site?: string | null;
  name?: string | null;
  type?: string | null;
}

export interface GenreItem {
  name: string;
}

export interface CountryItem {
  name: string;
}

export interface PersonItem {
  id: number;
  photo: string | null;
  name: string | null;
  enName: string | null;
  description: string | null;
  profession: string | null;
  enProfession: string | null;
}

export interface ReviewInfo {
  count?: number | null;
  positiveCount?: number | null;
  percentage?: number | null;
}

export interface SeasonInfo {
  number: number | null;
  episodesCount: number | null;
}

export interface MoneyValue {
  value?: number | null;
  currency?: string | null;
}

export interface Fees {
  world?: MoneyValue | null;
  usa?: MoneyValue | null;
  russia?: MoneyValue | null;
}

export interface Premiere {
  world?: string | null;
  usa?: string | null;
  russia?: string | null;
  digital?: string | null;
  cinema?: string | null;
  dvd?: string | null;
  bluRay?: string | null;
  country?: string | null;
}

export interface RelatedMovie {
  id: number;
  name: string | null;
  enName: string | null;
  alternativeName: string | null;
  type: MovieType | null;
  poster: Poster | null;
  rating: Rating | null;
  year: number | null;
}

export interface Watchability {
  items?: WatchabilityItem[];
}

export interface WatchabilityItem {
  name?: string | null;
  url?: string | null;
  logo?: ImageAsset | null;
}

export interface ReleaseYear {
  start: number;
  end: number | null;
}

export interface AudienceItem {
  count: number;
  country: string;
}

export interface Networks {
  items: NetworkItem[];
}

export interface NetworkItem {
  name?: string | null;
  logo?: ImageAsset | null;
}
