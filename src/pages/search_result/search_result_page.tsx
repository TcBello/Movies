import {
  Container,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import AppColor from "../../themes/app_color";
import NavBar from "../components/navbar";
import SearchResultItem from "./components/search_result_item";

const SearchResultPage = () => {
  return (
    <Container
      backgroundColor={AppColor.dark1}
      width="full"
      maxWidth={"100%"}
      height={"100vh"}
    >
      <NavBar />
      <VStack backgroundColor={"green"} height={"100vh"}>
        <Text fontSize={40} fontWeight={"bold"} color={"white"}>
          Search Results
        </Text>
        <Wrap spacing={20} width={"full"} flex={1}>
          <WrapItem>
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
          </WrapItem>
        </Wrap>
      </VStack>
    </Container>
  );
};

export default SearchResultPage;
