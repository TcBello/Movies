import "./navbar.css";
import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import AppColor from "../../themes/app_color";

const NavBar = () => {
  return (
    <HStack
      width="full"
      height="80px"
      justifyContent={"space-between"}
      //   position="fixed"
    >
      <Text fontWeight={"bold"} color="white" fontSize={32}>
        MOVIES
      </Text>
      <HStack width={"3xl"} height="full" justifyContent={"space-around"}>
        <Button
          className="navbar-link-text"
          variant={"link"}
          fontWeight="medium"
          color={"white"}
          fontSize={20}
          _active={{ color: AppColor.light2 }}
        >
          Home
        </Button>
        <Button
          className="navbar-link-text"
          variant={"link"}
          fontWeight="medium"
          color={"white"}
          fontSize={20}
          _active={{ color: AppColor.light2 }}
        >
          Genre
        </Button>
        <Button
          className="navbar-link-text"
          variant={"link"}
          fontWeight="medium"
          color={"white"}
          fontSize={20}
          _active={{ color: AppColor.light2 }}
        >
          Country
        </Button>
        <Button
          className="navbar-link-text"
          variant={"link"}
          fontWeight="medium"
          color={"white"}
          fontSize={20}
          _active={{ color: AppColor.light2 }}
        >
          Movies
        </Button>
        <Button
          className="navbar-link-text"
          variant={"link"}
          fontWeight="medium"
          color={"white"}
          fontSize={20}
          _active={{ color: AppColor.light2 }}
        >
          TV Series
        </Button>
        <IconButton
          aria-label={"search-button"}
          icon={<MdSearch color="white" size={24} />}
          _hover={{ backgroundColor: AppColor.light2 }}
          variant="ghost"
        />
      </HStack>
    </HStack>
  );
};

export default NavBar;
