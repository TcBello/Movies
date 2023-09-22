import {
  Box,
  Container,
  HStack,
  Image,
  VStack,
  Text,
  Tag,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import AppColor from "../../themes/app_color";
import NavBar from "../components/navbar";
import useMovieInformationPageController from "../../view-controllers/movie_information_page_controller";
import { MdGrade } from "react-icons/md";
import MovieInformation from "./components/movie_information";
import MovieInformationLoader from "./components/movie_information_loader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieInformationPage = () => {
  const { genres, movie, isInformationLoading, handleGetMovieInformation } =
    useMovieInformationPageController();

  const { id } = useParams();

  useEffect(() => {
    handleGetMovieInformation(id!);
  }, []);

  return (
    <Container
      height={"auto"}
      width={"full"}
      maxWidth={"100%"}
      backgroundColor={AppColor.dark1}
    >
      <NavBar />
      {!isInformationLoading ? (
        <MovieInformation genres={genres} movie={movie} />
      ) : (
        <MovieInformationLoader
          genres={genres}
          isInformationLoading={isInformationLoading}
        />
      )}
    </Container>
  );
};

export default MovieInformationPage;
