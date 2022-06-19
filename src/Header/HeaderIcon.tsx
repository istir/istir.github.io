import { Box, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { preProcessFile } from "typescript";

interface HeaderIconProps {
  href?: string;
  name: string;
  icon: IconType;
  size: "sm" | "md";
  onClick?: () => void;
}

export default function HeaderIcon(props: HeaderIconProps): JSX.Element {
  const bgColor = useColorModeValue("light.primary5", "dark.primary5");
  if (!props.href && props.onClick)
    return (
      <IconButton
        aria-label={props.name}
        icon={<props.icon />}
        size={props.size}
        transition="inherit"
        onClick={props.onClick}
        borderRadius={"full"}
        backgroundColor={bgColor}
      />
    );
  return (
    <IconButton
      aria-label={props.name}
      icon={<props.icon />}
      size={props.size}
      transition="inherit"
      href={props.href}
      as="a"
      borderRadius={"full"}
      backgroundColor={bgColor}
    />
  );
}
