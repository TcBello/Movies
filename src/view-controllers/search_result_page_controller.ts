import { usePagination } from "@ajna/pagination";
import { useState } from "react";
import SearchedMovieEntity from "../models/entities/searched_movie_entity";
import OmdbRepository from "../models/data/omdb_repository";
import { useNavigate } from "react-router-dom";

const useSearchResultPageController = () => {
  const [moviesTotal, setMoviesTotal] = useState<number | undefined>();
  const [movies, setMovies] = useState<SearchedMovieEntity[]>([]);
  const [isDataLoading, setDataLoading] = useState(true);

  const _repo = new OmdbRepository();

  const navigate = useNavigate();

  const { pages, pagesCount, offset, currentPage, setCurrentPage } =
    usePagination({
      total: moviesTotal,
      limits: {
        outer: 1,
        inner: 1,
      },
      initialState: {
        pageSize: 10,
        isDisabled: false,
        currentPage: 1,
      },
    });

  async function handleGenerateSearchResult(query: string) {
    const data = await _repo.searchMovieByTitle(query, currentPage);
    setMovies(data.searchResults);
    setMoviesTotal(data.totalResults);
    setDataLoading(false);
  }

  function handlePageChange(nextPage: number) {
    setDataLoading(true);
    setCurrentPage(nextPage);
  }

  function handleMovieClick(imdbID: string) {
    navigate(`/movie/${imdbID}`);
  }

  return {
    movies,
    pages,
    pagesCount,
    currentPage,
    offset,
    isDataLoading,
    handleGenerateSearchResult,
    handlePageChange,
    handleMovieClick,
  };
};

export default useSearchResultPageController;
