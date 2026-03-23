import { SearchMovies } from "@/api/request/SearchMovies";
import MoviesService from "@/api/services/MoviesService";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

export function useSearchFilms(q: string) {
  const [debouncedQ] = useDebounce(q ?? "", 500);
  const trimmed = debouncedQ.trim();
  const enabled = trimmed.length > 3;
  return useQuery({
    queryKey: [SearchMovies.QUERY_KEY, trimmed],
    queryFn: () => MoviesService.searchMovies(trimmed),
    enabled,
  });
}
