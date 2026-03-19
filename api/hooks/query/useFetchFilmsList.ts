import { GetMoviesList } from "@/api/request/Movies";
import MoviesService from "@/api/services/MoviesService";
import { useQuery } from "@tanstack/react-query";

export function useFetchMoviesList() {
  return useQuery({
    queryKey: [GetMoviesList.QUERY_KEY],
    queryFn: MoviesService.getMoviesList,
  });
}
