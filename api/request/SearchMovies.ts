import { MovieItem } from "@/api/types";

export namespace SearchMovies {
  export const METHOD = "GET";
  export const URL = (name: string) => `movie/search?query=${name}`;
  export const QUERY_KEY = "SEARCH FILMS ";

  export type Response = {
    docs: MovieItem[];
    limit: number;
    total: number;
    page: number;
    pages: number;
  };
}
