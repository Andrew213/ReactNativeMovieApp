import { MovieItem } from "@/api/types";

export namespace GetMoviesList {
  export const METHOD = "GET";
  export const URL = () =>
    "v1.5/movie?limit=11&notNullFields=poster.url&notNullFields=votes.imdb";
  export const QUERY_KEY = "FETCH FILMS LIST";

  export type Response = {
    docs: MovieItem[];
    limit: number;
    next: string;
    prev: string;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
