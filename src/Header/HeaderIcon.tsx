import {
  Box,
  Button,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { preProcessFile } from "typescript";

interface HeaderIconProps {
  href?: string;
  name: string;
  icon: IconType;
  size: "sm" | "md";
  onClick?: () => void;
  more?: boolean;
}

export default function HeaderIcon(props: HeaderIconProps): JSX.Element {
  const bgColor = useColorModeValue("light.primary5", "dark.primary5");
  if (!props.href && props.onClick) {
    if (props.more)
      return (
        <Button
          size={props.size}
          transition="inherit"
          onClick={props.onClick}
          borderRadius={"full"}
          backgroundColor={bgColor}
          gap="1"
        >
          <Text>{props.name}</Text>
          <props.icon />
        </Button>
      );
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
  }
  if (props.more)
    return (
      <Button
        size={props.size}
        transition="inherit"
        href={props.href}
        as="a"
        borderRadius={"full"}
        backgroundColor={bgColor}
        gap="1"
      >
        <Text>{props.name}</Text>
        <props.icon />
      </Button>
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
