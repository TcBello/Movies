import { VStack, Image, Text } from "@chakra-ui/react";

const SearchResultItem = () => {
  return (
    <VStack>
      <Image
        src="https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
        width={200}
        height={270}
        borderRadius={12}
      />
      <Text fontSize={20} color={"White"}>
        Ghost
      </Text>
    </VStack>
  );
};

export default SearchResultItem;
