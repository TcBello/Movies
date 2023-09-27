import {
  Box,
  HStack,
  Icon,
  Tag,
  VStack,
  Image,
  Text,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { MdGrade } from "react-icons/md";
import AppColor from "../../../themes/app_color";
import MovieEntity from "../../../models/entities/movie_entity";

const MovieInformation = (props: {
  genres: string[];
  movie: MovieEntity | null;
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  if (props.movie === null) {
    return (
      <Fragment>
        <VStack
          height={"90vh"}
          width={"full"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"bold"}
            fontSize={20}
            textAlign={"center"}
          >
            Information can't be fetch at the moment
          </Text>
          <Text color={"white"} fontWeight={"bold"} fontSize={20}>
            Please try again later
          </Text>
        </VStack>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Box
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={isDesktop ? 10 : 0}
        paddingRight={isDesktop ? 10 : 0}
      >
        {isDesktop ? (
          <HStack justifyContent={"space-around"}>
            <Image
              src={props.movie.poster}
              width={230}
              height={300}
              borderRadius={12}
            />
            <Box w={3} />
            <VStack alignItems={"flex-start"}>
              <Text color={"white"} fontSize={64} fontWeight={"bold"}>
                {props.movie.title}
              </Text>
              <Text color={"white"} fontSize={20}>
                {props.movie.plot}
              </Text>
              <HStack paddingTop={2} paddingBottom={2}>
                {props.genres.map((genre, index) => {
                  return (
                    <Tag
                      size={"lg"}
                      backgroundColor={AppColor.dark2}
                      color={"white"}
                      fontSize={20}
                      key={`genre-${index}`}
                      borderRadius={"full"}
                    >
                      {genre}
                    </Tag>
                  );
                })}
              </HStack>
              <HStack>
                <Icon as={MdGrade} height={30} width={30} color={"yellow"} />
                <Text fontSize={20} color={"white"}>
                  {props.movie.imdbRating}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        ) : (
          <VStack>
            <Image
              src={props.movie.poster}
              width={230}
              height={300}
              borderRadius={12}
            />
            <Text color={"white"} fontSize={32} fontWeight={"bold"}>
              {props.movie.title}
            </Text>
            <HStack>
              <Icon as={MdGrade} height={30} width={30} color={"yellow"} />
              <Text fontSize={20} color={"white"}>
                {props.movie.imdbRating}
              </Text>
            </HStack>
            <HStack paddingTop={2} paddingBottom={10}>
              {props.genres.map((genre, index) => {
                return (
                  <Tag
                    size={"lg"}
                    backgroundColor={AppColor.dark2}
                    color={"white"}
                    fontSize={20}
                    key={`genre-${index}`}
                    borderRadius={"full"}
                  >
                    {genre}
                  </Tag>
                );
              })}
            </HStack>
            <Text
              color={"white"}
              fontSize={20}
              fontWeight={"bold"}
              alignSelf={"flex-start"}
            >
              Plot Summary
            </Text>
            <Text color={"white"} fontSize={20} alignSelf={"flex-start"}>
              {props.movie.plot}
            </Text>
          </VStack>
        )}
      </Box>
      <VStack
        paddingLeft={isDesktop ? 10 : 0}
        paddingRight={isDesktop ? 10 : 0}
        paddingBottom={10}
        fontSize={20}
        color={"white"}
        alignItems={"flex-start"}
        spacing={5}
      >
        <Text>
          <span style={{ fontWeight: "bold" }}>Language:</span>{" "}
          {props.movie.language}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Year:</span> {props.movie.year}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Rated:</span> {props.movie.rated}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Released:</span>{" "}
          {props.movie.released}
        </Text>
        {props.movie.type === "series" ? (
          <Text>
            <span style={{ fontWeight: "bold" }}>Total Seasons:</span>{" "}
            {props.movie.totalSeasons}
          </Text>
        ) : (
          <Box display={"none"} />
        )}
        <Text>
          <span style={{ fontWeight: "bold" }}>Runtime:</span>{" "}
          {props.movie.runtime}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Director:</span>{" "}
          {props.movie.director}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Writer:</span>{" "}
          {props.movie.writer}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Actor:</span>{" "}
          {props.movie.actors}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Country:</span>{" "}
          {props.movie.country}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Awards:</span>{" "}
          {props.movie.awards}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Metascore:</span>{" "}
          {props.movie.metascore}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>IMDB Votes:</span>{" "}
          {props.movie.imdbVotes}
        </Text>
      </VStack>
    </Fragment>
  );
};

export default MovieInformation;
