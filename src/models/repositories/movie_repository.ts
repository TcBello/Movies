import MovieEntity from "../entities/movie_entity";
import SearchedMovieEntity from "../entities/searched_movie_entity";

abstract class MovieRepository {
  abstract searchMovieByTitle(title: string): Promise<SearchedMovieEntity[]>;
  abstract getMovieByID(imdbID: string): Promise<MovieEntity | null>;
}

export default MovieRepository;
