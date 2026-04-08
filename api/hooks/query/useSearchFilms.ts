import { SearchMovies } from "@/api/request/SearchMovies";
import MoviesService from "@/api/services/MoviesService";
import { useQuery } from "@tanstack/react-query";

export function useSearchFilms(q: string) {
  const enabled = q.length > 3;
  return useQuery({
    queryKey: [SearchMovies.QUERY_KEY, q],
    queryFn: () => MoviesService.searchMovies(q),
    enabled,
  });
}
