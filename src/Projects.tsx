import { Box, Grid, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import auctionhouse from "./images/auctionhouse.png";
import animal from "./images/animal.png";
import weebTools from "./images/weebTools.png";
import tilde from "./images/tilde.png";
interface ProjectsProps {}

export default function Projects(props: ProjectsProps): JSX.Element {
  return (
    <Grid
      minH="100vh"
      gridTemplateColumns={{
        base: "auto",
        md: "repeat(auto-fit, minmax(400px, 1fr))",
      }}
      gap="2"
    >
      <ProjectCard
        name="auctionhouse"
        alt="Auctionhouse main page"
        image={auctionhouse}
        url="https://auctionhouse.vercel.app"
      >
        <Box>
          <Text>
            Auctionhouse is a online auction marketplace created as a part of my
            graduation thesis. It's responsive and looking pretty decent.
            Created in mid 2022 using Next.js and Chakra-UI. You can't actually
            buy stuff there.
          </Text>
          <Link
            fontWeight={"semibold"}
            color={useColorModeValue(
              "light.onPrimaryContainer",
              "dark.onPrimaryContainer"
            )}
            href="https://github.com/istir/auctionhouse"
          >
            Github Repo
          </Link>
        </Box>
      </ProjectCard>
      <ProjectCard
        name="Animal"
        alt="Animal main page"
        image={animal}
        url="https://animal.vercel.app"
      >
        <Box>
          <Text>
            Animal is a project focused on helping user organise and care for
            their pets. Is pretty responsive and the codebase is not as clean as
            I would like now. Created in early 2021 using Next.js and Chakra-UI
            as a final project at the end of a course in university.
          </Text>
          <Link
            fontWeight={"semibold"}
            color={useColorModeValue(
              "light.onPrimaryContainer",
              "dark.onPrimaryContainer"
            )}
            href="https://github.com/istir/animal"
          >
            Github repo
          </Link>
        </Box>
      </ProjectCard>
      <ProjectCard
        name="weebTools"
        alt="weebTools main page"
        image={weebTools}
        // url="https://github.com/istir/weebTools-3.0"
      >
        <Box>
          <Text>
            Animal is a private project written in Electron and React that helps
            you manage your collection of images, be it anime-themed or not.
            This is a third major iteration (first being a very simple C# app
            and second being a more sophisticated C# WinForms app). There is a
            fourth iteration in the works using React and Rust (or Electron, I
            haven't decided yet) but it's not ready yet.
          </Text>
        </Box>
      </ProjectCard>
      <ProjectCard
        name="Tilde startpage"
        alt="Tilde main page"
        image={tilde}
        url="https://github.com/istir/tilde-6.0-local"
      >
        <Box>
          <Text>
            Tilde is a starpage heavily inspired by{" "}
            <Link
              color={useColorModeValue(
                "light.onPrimaryContainer",
                "dark.onPrimaryContainer"
              )}
              href="https://github.com/cadejscroggins/tilde"
              target={"_blank"}
            >
              cadejscroggins/tilde
            </Link>
            . There is a React and vanilla js version. I never came around to
            finishing it though as one of my favorite features - backdrop-filter
            is not supported in Firefox.
          </Text>
        </Box>
      </ProjectCard>
    </Grid>
  );
}
