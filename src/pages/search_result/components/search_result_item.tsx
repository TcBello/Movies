import { VStack, Image, Text, Skeleton } from "@chakra-ui/react";
import SearchedMovieEntity from "../../../models/entities/searched_movie_entity";
import { Fragment } from "react";

const SearchResultItem = (props: {
  movie: SearchedMovieEntity;
  onClick: React.MouseEventHandler;
  isLoading: boolean;
}) => {
  if (props.isLoading) {
    <Fragment>
      <VStack>
        <Skeleton isLoaded={false}>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
            width={200}
            height={270}
            borderRadius={12}
          />
        </Skeleton>
        <Skeleton isLoaded={false}>
          <Text fontSize={20} color={"White"}>
            Ghosted
          </Text>
        </Skeleton>
      </VStack>
    </Fragment>;
  }
  return (
    <Fragment>
      <VStack onClick={props.onClick}>
        <Image
          src={props.movie.poster}
          width={200}
          height={270}
          borderRadius={12}
        />
        <Text
          fontSize={20}
          color={"White"}
          textAlign={"center"}
          paddingLeft={10}
          paddingRight={10}
        >
          {props.movie.title}
        </Text>
      </VStack>
    </Fragment>
  );
};

export default SearchResultItem;
