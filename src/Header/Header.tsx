import React, { useRef } from "react";
// import HeaderBar from "./HeaderBar";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  Stack,
  useColorModeValue,
  useDimensions,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronDown, FaGithub } from "react-icons/fa";
import HeaderIcon from "./HeaderIcon";
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";
// import useLightModeCheck from "../../libs/useLightModeCheck";
// import PopupLogin from "../login/PopupLogin";
// import HamburgerOptions from "./HamburgerOptions";
// import SearchComponent from "./SearchComponent";
// import UserMenuOptions from "./UserMenuOptions";
// import Logo from "./Logo";
// import NextButton from "../NextButton";

export default function Header(): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();
  const [loading, setLoading] = React.useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const dimensions = useDimensions(ref, true);

  function isScrolled() {
    return dimensions && dimensions?.marginBox?.top < 0;
  }

  //   const lightMode = useLightModeCheck();
  return (
    <Box zIndex={100} ref={ref}>
      <Flex
        bg={useColorModeValue(`light.primary1`, "dark.primary1")}
        color={useColorModeValue("gray.600", "white")}
        // minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("light.primary5", "dark.primary5")}
        align="center"
        position={isScrolled() ? "fixed" : "absolute"}
        top={isScrolled() ? "0px" : "unset"}
        paddingY={isScrolled() ? "1" : "2"}
        width="full"
        zIndex={"banner"}
        transition={"0.2s all"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          transition="inherit"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Button
            variant={"ghost"}
            borderRadius="full"
            // textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            as={"a"}
            href="/"
            // onClick={() => {
            //   router.push("/");
            // }}
          >
            <Logo />
          </Button>

          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          transition="inherit"
        >
          <Flex
            justifyContent={"center"}
            alignItems="center"
            transition="inherit"
          >
            {/* <SearchComponent paddingX="2" /> */}
            <Flex
              paddingRight={"2"}
              display={{ base: "none", md: "flex" }}
              transition="inherit"
            >
              <HeaderIcons scrolled={isScrolled()} />
              {/* <HamburgerOptions
                currentUser={props.user}
                refresh={props.refresh}
                loggedIn={props.user ? true : false}
                renderAsButtons
              /> */}
            </Flex>
            {/* {!props.user ? (
              <PopupLogin
                setUser={props.setUser}
                refresh={props.refresh}
                buttonSize="sm"
              />
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  isLoading={loading}
                >
                  <Flex
                    placeItems={"center"}
                    bg={
                      lightMode ? "light.surfaceVariant" : "dark.surfaceVariant"
                    }
                    borderRadius={"full"}
                    pr="2"
                    border="2px"
                    borderColor={
                      lightMode ? "light.surfaceVariant" : "dark.surfaceVariant"
                    }
                  >
                    <Avatar
                      size={"sm"}
                      src={props.user.avatar || "undefined"}
                      mr="1"
                    />
                    <FaChevronDown />
                  </Flex>
                </MenuButton>
                <UserMenuOptions
                  refresh={props.refresh}
                  setUser={props.setUser}
                  setLoading={setLoading}
                  user={props.user}
                />
              </Menu>
            )} */}
          </Flex>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {/* <HamburgerOptions
          currentUser={props.user}
          refresh={props.refresh}
          loggedIn={props.user ? true : false}
        /> */}
      </Collapse>
    </Box>
  );
}
