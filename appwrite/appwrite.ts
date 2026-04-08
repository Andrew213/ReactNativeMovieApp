import { MovieItem } from "@/api/types";
import { Client, ID, Query, TablesDB } from "react-native-appwrite";

const DATABASE = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

const tablesDB = new TablesDB(client);

export const updateSearchCount = async (movie: MovieItem) => {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE,
      tableId: COLLECTION_ID,
      queries: [Query.equal("movie_id", movie.id)],
    });

    if (result.rows.length > 0) {
      const existingMovie = result.rows[0];

      await tablesDB.updateRow({
        databaseId: DATABASE,
        tableId: COLLECTION_ID,
        rowId: existingMovie.$id,
        data: {
          count: existingMovie.count + 1,
        },
      });
    } else {
      await tablesDB.createRow({
        databaseId: DATABASE,
        tableId: COLLECTION_ID,
        rowId: ID.unique(),
        data: {
          movie_id: movie.id,
          count: 1,
          poster_url: movie.poster?.url,
          title: movie.name || movie.alternativeName,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getTrandingMovies = async () => {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE,
      tableId: COLLECTION_ID,
      queries: [Query.limit(5), Query.orderDesc("count")],
    });

    return result.rows as unknown as TrendingMovie[];
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
