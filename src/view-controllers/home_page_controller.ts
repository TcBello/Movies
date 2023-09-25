import { useState } from "react";
import OmdbRepository from "../models/data/omdb_repository";
import SearchedMovieEntity from "../models/entities/searched_movie_entity";
import { useNavigate } from "react-router-dom";

const useHomePageController = () => {
  const [query, setQuery] = useState("");
  const [isSuggestionLoading, setSuggestionLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchedMovieEntity[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const repo = new OmdbRepository();

  const navigate = useNavigate();

  async function _handleSuggestion(value: string) {
    clearTimeout(timer);
    const timerID = setTimeout(async () => {
      const suggestionsData = await repo.searchMovieByTitle(value);
      if (suggestionsData.searchResults.length > 0) {
        setSuggestions(suggestionsData.searchResults.slice(0, 3));
      } else {
        setErrorMessage("Movie not found!");
      }
      setSuggestionLoading(false);
    }, 1000);

    setTimer(timerID);
  }

  function onChangeQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    if (!isSuggestionLoading) setSuggestionLoading(true);
    if (!errorMessage) setErrorMessage(null);

    _handleSuggestion(e.target.value);
  }

  function handleSelectMovie(imdbID: string) {
    setQuery("");
    navigate(`/movie/${imdbID}`);
  }

  function handleViewAll() {
    navigate(`/search/${query}`);
  }

  return {
    query,
    isSuggestionLoading,
    suggestions,
    errorMessage,
    onChangeQuery,
    handleSelectMovie,
    handleViewAll,
  };
};

export default useHomePageController;
