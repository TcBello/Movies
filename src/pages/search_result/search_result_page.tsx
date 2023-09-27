import {
  Container,
  VStack,
  Text,
  Wrap,
  WrapItem,
  SimpleGrid,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import AppColor from "../../themes/app_color";
import NavBar from "../components/navbar";
import SearchResultItem from "./components/search_result_item";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
} from "@ajna/pagination";
import { useParams } from "react-router-dom";
import useSearchResultPageController from "../../view-controllers/search_result_page_controller";
import { useEffect } from "react";

const SearchResultPage = () => {
  const { query } = useParams();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const {
    movies,
    pages,
    pagesCount,
    currentPage,
    offset,
    isDataLoading,
    handleGenerateSearchResult,
    handlePageChange,
    handleMovieClick,
  } = useSearchResultPageController();

  useEffect(() => {
    handleGenerateSearchResult(query!);
  }, [currentPage, offset]);

  return (
    <Container
      backgroundColor={AppColor.dark1}
      width="full"
      maxWidth={"100%"}
      height={isDataLoading ? "120vh" : "full"}
      minHeight={"100vh"}
    >
      <NavBar />
      <VStack height={"100%"} paddingBottom={8}>
        <Text fontSize={40} fontWeight={"bold"} color={"white"}>
          Search Results
        </Text>
        <SimpleGrid
          spacingY={5}
          spacingX={5}
          width={"full"}
          paddingTop={5}
          paddingBottom={8}
          columns={isDesktop ? 5 : 2}
        >
          {movies.map((movie, index) => {
            return (
              <SearchResultItem
                movie={movie}
                key={movie.imdbID}
                onClick={() => handleMovieClick(movie.imdbID)}
                isLoading={isDataLoading}
              />
            );
          })}
        </SimpleGrid>
        <Container width={"full"}>
          <Center>
            <Pagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            >
              <PaginationContainer>
                <PaginationPrevious
                  _hover={{
                    bg: AppColor.light1,
                  }}
                  bg={AppColor.light2}
                  marginRight={5}
                >
                  {isDesktop ? "Previous" : "Prev"}
                </PaginationPrevious>
                <PaginationPageGroup
                  separator={
                    <PaginationSeparator
                      fontSize="sm"
                      w={7}
                      jumpSize={11}
                      color={"white"}
                    />
                  }
                >
                  {pages.map((page: number) => (
                    <PaginationPage
                      w={8}
                      key={`pagination_page_${page}`}
                      page={page}
                      _current={{
                        bg: AppColor.dark2,
                        fontSize: "sm",
                        w: 7,
                        color: "white",
                      }}
                    />
                  ))}
                </PaginationPageGroup>
                <PaginationNext
                  _hover={{
                    bg: AppColor.light1,
                  }}
                  bg={AppColor.light2}
                  marginLeft={5}
                >
                  Next
                </PaginationNext>
              </PaginationContainer>
            </Pagination>
          </Center>
        </Container>
      </VStack>
    </Container>
  );
};

export default SearchResultPage;
