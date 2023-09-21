class SearchedMovieEntity {
  public title: string;
  public year: string;
  public imdbID: string;
  public type: string;
  public poster: string;

  constructor(
    title: string,
    year: string,
    imdbID: string,
    type: string,
    poster: string
  ) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbID;
    this.type = type;
    this.poster = poster;
  }

  static fromJSON(json: any): SearchedMovieEntity {
    return new SearchedMovieEntity(
      json.Title,
      json.Year,
      json.imdbID,
      json.Type,
      json.Poster
    );
  }
}

export default SearchedMovieEntity;
