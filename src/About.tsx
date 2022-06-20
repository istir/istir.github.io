import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { Component } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import stylish from "./images/stylish.png";
export default function About() {
  return (
    <Flex margin={{ base: 4, md: 10 }} justifyContent={"center"} mt="2">
      <Box
        textAlign={"justify"}
        maxW={{ base: "100vw", md: "80vw", lg: "60vw" }}
      >
        <Text>
          I've been interested in computers from the early days of my childhood,
          but school never really satisfied my desire to learn new things about
          computers, so I tried doing it myself. At first, I started with
          graphics software, like GIMP and then later Photoshop. As it turns
          out, I wasn't that good at it, but I still liked using it, mostly as a
          tool for modifying images.
        </Text>
        <Text>
          After fiddling with graphics software for a few years, I learned about
          custom CSS in Firefox. Back then you'd use Stylish to change the
          site's CSS or even the whole browser's CSS. And I did, creating styles
          that better suited me.
        </Text>
        <Flex
          justifyContent={"center"}
          alignItems="center"
          overflow={"hidden"}
          m="4"
        >
          <Flex
            backgroundColor={useColorModeValue(
              "light.primary5",
              "dark.primary5"
            )}
            flexDir={"column"}
            borderRadius="lg"
            overflow={"hidden"}
            padding="2"
            shadow={"md"}
          >
            <Image src={stylish} />
            <Text fontSize={"sm"} textAlign="center">
              One of many custom Firefox styles I've made
            </Text>
          </Flex>
        </Flex>
        <Text>
          After a few years of that I... burned out. I stopped what I was doing
          and started taking school more seriously, however, it turned out I
          didn't like CNC machines as much as I thought I did, so when it came
          to choosing my university I chose Computer Science major.
        </Text>
        <Text>
          It turned out I loved it, especially programming. After fiddling with
          my own programs, mainly in C# I rediscovered how fun was it to make
          stuff with CSS, but now I took it to another level and learned how to
          make whole websites.
        </Text>
        <Flex
          justifyContent={"center"}
          flexDir="column"
          alignItems={"center"}
          marginTop="10"
          gap="2"
          marginBottom={"10"}
        >
          <Text fontWeight={"bold"}>Contact</Text>
          <Link
            href="https://github.com/istir"
            target="_blank"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            gap="2"
          >
            <Text>Github</Text>
            <Box fontSize={"4xl"}>
              <FaGithub />
            </Box>
          </Link>
          <Link
            href="mailto:grzegorz.siedlecki@outlook.com"
            target="_blank"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            gap="2"
          >
            <Text>Email</Text>
            <Box fontSize={"4xl"}>
              <FaEnvelope />
            </Box>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
