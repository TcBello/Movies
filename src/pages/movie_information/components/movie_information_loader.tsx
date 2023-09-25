import {
  Box,
  HStack,
  Skeleton,
  VStack,
  Image,
  Text,
  Tag,
  Icon,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { MdGrade } from "react-icons/md";
import AppColor from "../../../themes/app_color";

const MovieInformationLoader = (props: {
  genres: string[];
  isInformationLoading: boolean;
}) => {
  return (
    <Fragment>
      <Box padding={10}>
        <HStack justifyContent={"space-around"}>
          <Skeleton isLoaded={!props.isInformationLoading}>
            <Image
              src="https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
              width={230}
              height={300}
              borderRadius={12}
            />
          </Skeleton>
          <Box w={3} />
          <VStack alignItems={"flex-start"}>
            <Skeleton isLoaded={!props.isInformationLoading}>
              <Text color={"white"} fontSize={64} fontWeight={"bold"}>
                Mission: Impossible - Ghost Protocol
              </Text>
            </Skeleton>
            <Skeleton isLoaded={!props.isInformationLoading}>
              <Text color={"white"} fontSize={20}>
                The IMF is shut down when it's implicated in the bombing of the
                Kremlin, causing Ethan Hunt and his new team to go rogue to
                clear their organization's name.
              </Text>
            </Skeleton>
            <HStack paddingTop={2} paddingBottom={2}>
              {props.genres.map((genre, index) => {
                return (
                  <Skeleton
                    isLoaded={!props.isInformationLoading}
                    key={`skeleton-genre-${index}`}
                  >
                    <Tag
                      size={"lg"}
                      backgroundColor={AppColor.dark2}
                      color={"white"}
                      fontSize={20}
                      borderRadius={"full"}
                    >
                      {genre}
                    </Tag>
                  </Skeleton>
                );
              })}
            </HStack>
            <Skeleton isLoaded={!props.isInformationLoading}>
              <HStack>
                <Icon as={MdGrade} height={30} width={30} color={"yellow"} />
                <Text fontSize={20} color={"white"}>
                  7.4
                </Text>
              </HStack>
            </Skeleton>
          </VStack>
        </HStack>
      </Box>
      <VStack
        paddingLeft={10}
        paddingRight={10}
        paddingBottom={10}
        fontSize={20}
        color={"white"}
        alignItems={"flex-start"}
        spacing={5}
      >
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Language:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Year:</span> 2023
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Rated:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Released:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Runtime:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Director:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Writer:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Actor:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Country:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Awards:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>Metascore:</span> English
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!props.isInformationLoading}>
          <Text>
            <span style={{ fontWeight: "bold" }}>IMDB Votes:</span> English
          </Text>
        </Skeleton>
      </VStack>
    </Fragment>
  );
};

export default MovieInformationLoader;
