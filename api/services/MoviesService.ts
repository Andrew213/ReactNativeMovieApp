import { request } from "@/api/axios";
import { GetMovieDetail, GetMoviesList } from "@/api/request/Movies";
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

  public static async getMovieDetails(params: GetMovieDetail.Params) {
    try {
      const response = await request<GetMovieDetail.Response>({
        method: GetMovieDetail.METHOD,
        url: GetMovieDetail.URL(params.id),
      });
      return response;
    } catch (error) {
      console.error("Error while get movie details ", error);
      throw error;
    }
  }
}
