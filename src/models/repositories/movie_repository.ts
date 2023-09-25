import MovieEntity from "../entities/movie_entity";
import SearchResultEntity from "../entities/search_result_entity";
import SearchedMovieEntity from "../entities/searched_movie_entity";

abstract class MovieRepository {
  abstract searchMovieByTitle(
    title: string,
    page: number
  ): Promise<SearchResultEntity>;
  abstract getMovieByID(imdbID: string): Promise<MovieEntity | null>;
}

export default MovieRepository;
