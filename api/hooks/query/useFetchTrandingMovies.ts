import { getTrandingMovies } from "@/appwrite/appwrite";
import { useQuery } from "@tanstack/react-query";

export function useFetchTrandingFilms() {
  return useQuery({
    queryKey: ["TRANDING"],
    queryFn: () => getTrandingMovies(),
  });
}
