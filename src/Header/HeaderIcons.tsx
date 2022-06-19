import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import HeaderIcon from "./HeaderIcon";

interface HeaderIconProps {
  scrolled?: boolean | null;
  asColumn?: boolean;
}

export default function HeaderIcons(props: HeaderIconProps): JSX.Element {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      transition="inherit"
      gap="2"
      flexDir={props.asColumn ? "column" : "row"}

      // zIndex={""}
    >
      <HeaderIcon
        name="Check out my Github"
        href="https://github.com/istir"
        icon={FaGithub}
        size={props.scrolled ? "sm" : "md"}
        more={props.asColumn}
      />
      <HeaderIcon
        name="Write me an email"
        href="mailto:grzegorz.siedlecki@outlook.com"
        icon={FaEnvelope}
        size={props.scrolled ? "sm" : "md"}
        more={props.asColumn}
      />
      <HeaderIcon
        name="Toggle theme"
        size={props.scrolled ? "sm" : "md"}
        icon={useColorModeValue(FaMoon, FaSun)}
        onClick={toggleColorMode}
        more={props.asColumn}
      />
    </Flex>
  );
}
