import { GetMoviesList } from "@/api/request/Movies";
import MoviesService from "@/api/services/MoviesService";
import { useQuery } from "@tanstack/react-query";

export function useFetchMovieDetail(id?: string | number) {
  return useQuery({
    queryKey: [GetMoviesList.QUERY_KEY, id],
    queryFn: () => MoviesService.getMovieDetails({ id: id! }),
    enabled: !!id,
  });
}
