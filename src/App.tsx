import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/app_router";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={AppRouter.router} />
    </ChakraProvider>
  );
}

export default App;
