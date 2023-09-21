import "./navbar.css";
import { HStack, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack width="full" height="80px">
      <Text fontWeight={"bold"} color="white" fontSize={32}>
        MOVIES
      </Text>
    </HStack>
  );
};

export default NavBar;
