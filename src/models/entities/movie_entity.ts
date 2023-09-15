import RatingsEntity from "./ratings_entity";

class MovieEntity {
  private title: string;
  private year: string;
  private rated: string;
  private released: string;
  private runtime: string;
  private genre: string;
  private director: string;
  private writer: string;
  private actors: string;
  private plot: string;
  private language: string;
  private country: string;
  private awards: string;
  private poster: string;
  private ratings: RatingsEntity;
  private metascore: string;
  private imdbRating: string;
  private imdbVotes: string;
  private imdbID: string;
  private type: string;
  private totalSeasons: string;
  private response: string;

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
    ratings: RatingsEntity,
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
    this.ratings = ratings;
    this.metascore = metascore;
    this.imdbRating = imdbRating;
    this.imdbVotes = imdbVotes;
    this.imdbID = imdbID;
    this.type = type;
    this.totalSeasons = totalSeasons;
    this.response = response;
  }
}

export default MovieEntity;
