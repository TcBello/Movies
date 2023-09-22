import { useState } from "react";
import OmdbRepository from "../models/data/omdb_repository";
import MovieEntity from "../models/entities/movie_entity";

const useMovieInformationPageController = () => {
  const [isInformationLoading, setInformationLoading] = useState(true);
  const [genres, setGenres] = useState<string[]>([
    "Action",
    "Adventure",
    "Thriller",
  ]);
  const [movie, setMovie] = useState<MovieEntity | null>(null);

  const _repo = new OmdbRepository();

  async function handleGetMovieInformation(imdbID: string) {
    const data = await _repo.getMovieByID(imdbID);

    if (data) {
      setGenres(data.genre.split(","));
    }

    setMovie(data);
    setInformationLoading(false);
  }

  return {
    genres,
    movie,
    isInformationLoading,
    handleGetMovieInformation,
  };
};

export default useMovieInformationPageController;
