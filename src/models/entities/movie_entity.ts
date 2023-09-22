class MovieEntity {
  public title: string;
  public year: string;
  public rated: string;
  public released: string;
  public runtime: string;
  public genre: string;
  public director: string;
  public writer: string;
  public actors: string;
  public plot: string;
  public language: string;
  public country: string;
  public awards: string;
  public poster: string;
  public metascore: string;
  public imdbRating: string;
  public imdbVotes: string;
  public imdbID: string;
  public type: string;
  public totalSeasons: string;
  public response: string;

  constructor(
    title: string,
    year: string,
    rated: string,
    released: string,
    runtime: string,
    genre: string,
    director: string,
    writer: string,
    actors: string,
    plot: string,
    language: string,
    country: string,
    awards: string,
    poster: string,
    metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    type: string,
    totalSeasons: string,
    response: string
  ) {
    this.title = title;
    this.year = year;
    this.rated = rated;
    this.released = released;
    this.runtime = runtime;
    this.genre = genre;
    this.director = director;
    this.writer = writer;
    this.actors = actors;
    this.plot = plot;
    this.language = language;
    this.country = country;
    this.awards = awards;
    this.poster = poster;
    this.metascore = metascore;
    this.imdbRating = imdbRating;
    this.imdbVotes = imdbVotes;
    this.imdbID = imdbID;
    this.type = type;
    this.totalSeasons = totalSeasons;
    this.response = response;
  }

  static fromJSON(json: any): MovieEntity {
    return new MovieEntity(
      json.Title,
      json.Year,
      json.Rated,
      json.Released,
      json.Runtime,
      json.Genre,
      json.Director,
      json.Writer,
      json.Actors,
      json.Plot,
      json.Language,
      json.Country,
      json.Awards,
      json.Poster,
      json.Metascore,
      json.imdbRating,
      json.imdbVotes,
      json.imdbID,
      json.Type,
      json.totalSeasons,
      json.Response
    );
  }
}

export default MovieEntity;
