import MovieEntity from "../entities/movie_entity";
import SearchedMovieEntity from "../entities/searched_movie_entity";
import MovieRepository from "../repositories/movie_repository";

class OmdbRepository implements MovieRepository {
  private _api: string = "https://www.omdbapi.com/?apikey=3b992dd9";

  async searchMovieByTitle(title: string): Promise<SearchedMovieEntity[]> {
    if (title.length > 0) {
      const result = await fetch(`${this._api}&s=${title}`);

      if (result.status === 200) {
        const data = await result.json();

        if (data.Response === "True") {
          const rawData = data.Search as {}[];
          const newData = rawData.map((value) =>
            SearchedMovieEntity.fromJSON(value)
          );

          return newData;
        }

        console.log(data);
      }
    }

    return [];
  }
  getMovieByID(imdbID: string): Promise<MovieEntity> {
    // TODO: Implement this method
    throw new Error("Method not implemented.");
  }
}

export default OmdbRepository;
