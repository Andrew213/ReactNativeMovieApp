import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// export const API_URL = "https://api.themoviedb.org/3/";
export const API_URL = "https://api.poiskkino.dev/";

export const client = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    // Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    "X-API-KEY": process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  },
});

export const request = async <T = unknown>(
  options: AxiosRequestConfig,
): Promise<T> => {
  const onSuccess = (response: AxiosResponse<T>) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    console.log("axios message:", error.message);
    console.log("axios code:", error.code);
    console.log("axios status:", error.response?.status);
    console.log("axios response:", error.response?.data);
    console.log("axios url:", error.config?.url);
    console.log("axios headers:", error.config?.headers);

    if (error.response) {
      const status = error.response.status;
      throw new Error(
        (error.response.data as any) || `Request failed with status ${status}`,
      );
    }
    throw new Error(error.message || "Network Error");
  };

  return client(options).then(onSuccess).catch(onError);
};
