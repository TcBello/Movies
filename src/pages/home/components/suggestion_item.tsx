import { Box, Button, Container, HStack, Image, Text } from "@chakra-ui/react";
import SearchedMovieEntity from "../../../models/entities/searched_movie_entity";

const SuggestionItem = (props: {
  movie: SearchedMovieEntity;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Container
      onClick={props.onClick}
      _hover={{ backgroundColor: "whitesmoke" }}
    >
      <HStack width={"full"} paddingLeft={2} paddingRight={2}>
        <Image
          src={props.movie.poster}
          width={90}
          height={120}
          borderRadius={8}
        />
        <Box width={2} />
        <Text fontWeight={"bold"} fontSize={16}>
          {props.movie.title}
        </Text>
      </HStack>
    </Container>
  );
};

export default SuggestionItem;
