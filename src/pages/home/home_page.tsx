import {
  Container,
  VStack,
  Text,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import "./home_page.css";
import { MdSearch, MdArrowForward } from "react-icons/md";
import useHomePageController from "../../view-controllers/home_page_controller";
import { motion } from "framer-motion";
import AppColor from "../../themes/app_color";
import Loader from "../components/loader";
import SuggestionItem from "./components/suggestion_item";

const HomePage = () => {
  const {
    query,
    isSuggestionLoading,
    suggestions,
    errorMessage,
    onChangeQuery,
    handleSelectMovie,
    handleViewAll,
  } = useHomePageController();
  return (
    <div className="background">
      <Container
        width="full"
        maxWidth={"100%"}
        minHeight="100vh"
        backgroundColor={"rgba(3, 0, 28, 0.9)"}
        paddingTop={"10vh"}
      >
        <VStack>
          {/* MOVIES TEXT */}
          <Text fontSize={96} color={"white"}>
            MOVIES
          </Text>
          <Box height={5} />
          <Container background={"white"} padding={0} borderRadius={8}>
            {/* SEARCH INPUT */}
            <InputGroup>
              <InputLeftElement>
                <Icon as={MdSearch} />
              </InputLeftElement>
              <Input
                placeholder="Search Movie..."
                variant={"filled"}
                width={"2xl"}
                onChange={onChangeQuery}
              />
            </InputGroup>
            {query.length > 0 ? (
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "58vh" }}
              >
                {!isSuggestionLoading ? (
                  !errorMessage ? (
                    <VStack height={"full"}>
                      <Box height={2} />
                      <Flex flex={1} width={"full"}>
                        <VStack width={"full"}>
                          {suggestions.map((movie, index) => {
                            return (
                              <SuggestionItem
                                movie={movie}
                                key={movie.imdbID}
                                onClick={() => handleSelectMovie(movie.imdbID)}
                              />
                            );
                          })}
                        </VStack>
                      </Flex>
                      <Button
                        rightIcon={<Icon as={MdArrowForward} />}
                        backgroundColor={AppColor.light2}
                        color={"white"}
                        _hover={{
                          backgroundColor: AppColor.light1,
                          color: "black",
                        }}
                        onClick={handleViewAll}
                      >
                        View all
                      </Button>
                      <Box height={2} />
                    </VStack>
                  ) : (
                    <Center height={"full"}>
                      <Text fontWeight={"bold"} fontSize={24}>
                        {errorMessage}
                      </Text>
                    </Center>
                  )
                ) : (
                  <Center height={"full"}>
                    <Loader />
                  </Center>
                )}
              </motion.div>
            ) : (
              <div></div>
            )}
          </Container>
        </VStack>
      </Container>
    </div>
  );
};

export default HomePage;
