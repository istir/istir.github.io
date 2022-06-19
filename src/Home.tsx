import { Box } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import AnimatedBg from "./AnimatedBg";
import Header from "./Header/Header";
import HeaderIcons from "./Header/HeaderIcons";
import Projects from "./Projects";
import TitleHolder from "./TitleHolder";

interface HomeProps {}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <Box>
      {/* <TitleHolder title="istir"> */}
      <Header />
      {/* <HeaderIcons scrolled={false} /> */}
      {/* </TitleHolder> */}
      <AnimatedBg />
      <Projects />
      <About />
    </Box>
  );
}
