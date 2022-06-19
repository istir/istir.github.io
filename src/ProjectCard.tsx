import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface ProjectCardProps {
  name: string;
  image?: string;
  alt?: string;
  //   text: string;
  url?: string;
  children: React.ReactNode;
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
  function renderImage(image?: string) {
    return (
      <Flex flexDir="column">
        {image ? (
          <Image
            width="calc(100% - 2 * var(--chakra-space-2))"
            height={"80"}
            objectFit="contain"
            src={image}
            alt={props.alt}
            backgroundColor="white"
            borderRadius="lg"
            shadow="md"
            marginX="auto"
            mt="2"
          />
        ) : (
          <Flex
            width="calc(100% - 2 * var(--chakra-space-2))"
            backgroundColor="white"
            borderRadius="lg"
            shadow="md"
            margin="auto"
            mt="2"
            height={"80"}
            color={"gray.500"}
            justifyContent="center"
            alignItems={"center"}
            fontWeight="bold"
          >
            Brak zdjęcia
          </Flex>
        )}
      </Flex>
    );
  }
  return (
    <Flex
      minH="fit-content"
      //   height="fit-content"
      flexDir={"column"}
      backgroundColor={useColorModeValue("light.primary3", "dark.primary3")}
      borderRadius="lg"
      shadow={"lg"}
      marginX="3"
      marginY={{ base: "1.5", md: "3" }}
      overflow={"hidden"}
      cursor={"pointer"}
      as={"a"}
      href={props.url}
      transition="all 0.2s ease-in-out"
      _hover={{ md: { transform: "scale(1.02)" } }}
    >
      {renderImage(props.image)}
      <Flex padding="2" pt="0" alignItems={"top"} flexDir="column">
        <Text fontSize={"lg"} fontWeight="bold">
          {props.name}
        </Text>
        {props.children}
      </Flex>
    </Flex>
  );
}
