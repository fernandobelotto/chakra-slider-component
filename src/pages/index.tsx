import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import SliderComponent from "../components/SliderComponent";

export default function Index() {
  return (
    <>
      <Box w="100vw" h="100vh">
        <Center h="100%">
          <DarkModeSwitch />
          <SliderComponent />
        </Center>
      </Box>
    </>
  );
}
