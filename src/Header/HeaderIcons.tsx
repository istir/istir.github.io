import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import HeaderIcon from "./HeaderIcon";

interface HeaderIconProps {
  scrolled: boolean | null;
}

export default function HeaderIcons(props: HeaderIconProps): JSX.Element {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex transition="inherit" gap="2">
      <HeaderIcon
        name="Github"
        href="https://github.com/istir"
        icon={FaGithub}
        size={props.scrolled ? "sm" : "md"}
      />
      <HeaderIcon
        name="Email"
        href="mailto:grzegorz.siedlecki@outlook.com"
        icon={FaEnvelope}
        size={props.scrolled ? "sm" : "md"}
      />
      <HeaderIcon
        name="Theme"
        size={props.scrolled ? "sm" : "md"}
        icon={useColorModeValue(FaMoon, FaSun)}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
