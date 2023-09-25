import SearchedMovieEntity from "./searched_movie_entity";

interface SearchResultEntity {
  totalResults: number;
  searchResults: SearchedMovieEntity[];
}

export default SearchResultEntity;
