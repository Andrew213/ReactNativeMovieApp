import { request } from "@/api/axios";
import { GetMoviesList } from "@/api/request/Movies";
import { SearchMovies } from "@/api/request/SearchMovies";

export default class MoviesService {
  public static async getMoviesList() {
    try {
      const response = await request<GetMoviesList.Response>({
        method: GetMoviesList.METHOD,
        url: GetMoviesList.URL(),
      });
      return response;
    } catch (error) {
      console.error("Error while getting movies list", error);
      throw error;
    }
  }

  public static async searchMovies(name: string) {
    try {
      const response = await request<GetMoviesList.Response>({
        method: SearchMovies.METHOD,
        url: SearchMovies.URL(name),
      });
      return response;
    } catch (error) {
      console.error("Error while search movies ", error);
      throw error;
    }
  }
}
