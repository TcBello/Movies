import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { HStack, Text, Button } from "@chakra-ui/react";

const NavBar = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <HStack width="full" height="80px">
      <Button
        variant={"unstyled"}
        fontWeight={"bold"}
        color="white"
        fontSize={32}
        onClick={handleClick}
      >
        MOVIES
      </Button>
    </HStack>
  );
};

export default NavBar;
