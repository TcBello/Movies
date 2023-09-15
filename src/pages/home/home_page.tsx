import { Container } from "@chakra-ui/react";
import AppColor from "../../themes/app_color";
import NavBar from "../components/navbar";
import "./home_page.css";

const HomePage = () => {
  return (
    <Container
      width="full"
      maxWidth={"100%"}
      minHeight="100vh"
      backgroundColor={AppColor.dark1}
    >
      <NavBar />
    </Container>
  );
};

export default HomePage;
