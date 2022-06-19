import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import RandomColor, { HSL } from "./RandomColor";

interface AnimatedBgProps {}

export default function AnimatedBg(props: AnimatedBgProps): JSX.Element {
  const [bg, setBg] = React.useState<HSL>(RandomColor.randomHover());
  //   const [h1, setH1] = React.useState<HSL>(
  //     RandomColor.randomHeaderColor("h1", bg)
  //   );
  //   const [h2, setH2] = React.useState<HSL>(
  //     RandomColor.randomHeaderColor("h2", bg)
  //   );
  //     const h1 = RandomColor.randomHeaderColor("h1", backgroundColor);
  //     const h2 = RandomColor.randomHeaderColor("h2", backgroundColor);
  //   console.log(bg);
  const randomBgTimeout = 250; //timeout in ms
  const [lastMove, setLastMove] = React.useState<number>(Date.now());
  return (
    <Box
      transition={"250ms background-color"}
      height="100vh"
      onMouseMove={() => {
        if (lastMove > Date.now() - randomBgTimeout) return;
        setBg(RandomColor.randomHover());
        // setH1(RandomColor.randomHeaderColor("h1", bg));
        // setH2(RandomColor.randomHeaderColor("h2", bg));
        setLastMove(Date.now());
      }}
      backgroundColor={` ${RandomColor.HSLtoString(bg, 0.7)}`}
      backgroundBlendMode="darken"
    >
      <Flex
        justifyContent={"center"}
        // pos="absolute"
        width="100vw"
        alignItems="center"
        height="100vh"
        flexDirection={"column"}
        opacity="1"
        zIndex={"2"}
        userSelect="none"
      >
        <Text
          fontWeight={"bold"}
          fontSize="3xl"
          color={useColorModeValue("dark.primary", "light.primary")}
          textShadow={`-1px -1px 0 ${useColorModeValue(
            "var(--chakra-colors-blue-200)",
            "var(--chakra-colors-blue-600)"
          )}, -2px -2px 0 ${useColorModeValue(
            "var(--chakra-colors-light-primary)",
            "var(--chakra-colors-dark-primary)"
          )}`}
        >
          Hello, I'm istir.
        </Text>
        <Text
          fontWeight={"semibold"}
          fontSize="xl"
          color={useColorModeValue("dark.primary", "light.primary")}
          textShadow="1px 1px 0 #444"
        >
          Nice to meet you!
        </Text>
      </Flex>
    </Box>
  );
}
