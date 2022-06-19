import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./Header/Header";
import theme from "./theme";
import Home from "./Home";
// import { Logo } from "./Logo"
// import "./index.css";
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

// import React from "react";
// import "./App.css";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import RandomColor from "./RandomColor";
// import Card from "./Card";
// import Contact from "./Contact";
// import About from "./About";
// interface HSL {
//   h: number;
//   s: number;
//   l: number;
// }

// interface IProps {}
// interface IState {
//   background: HSL;
//   h1: HSL;
//   h2: HSL;
// }

// class App extends React.Component<IProps, IState> {
//   welcomeRef: React.RefObject<HTMLElement>;
//   constructor(props: IProps) {
//     super(props);
//     this.welcomeRef = React.createRef();
//     this.state = {
//       background: { h: 11.7, s: 100, l: 81.8 },
//       h1: { h: 0, s: 0, l: 0 },
//       h2: { h: 0, s: 0, l: 0 },
//     };
//   }

//   onHover() {
//     const backgroundColor = RandomColor.randomHover();
//     const h1 = RandomColor.randomHeaderColor("h1", backgroundColor);
//     const h2 = RandomColor.randomHeaderColor("h2", backgroundColor);
//     this.setState({
//       background: backgroundColor,
//       h1: h1,
//       h2: h2,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <nav id="navbar">
//           {/* <!--   <img src="here-we-put-the-logo"/> --> */}
//           <div id="nav-links">
//             <a className="nav-link" href="#projects">
//               Projects
//             </a>
//             <a className="nav-link" href="#contact">
//               Contact
//             </a>
//             <a className="nav-link" href="#about">
//               About me
//             </a>
//             <a
//               className="nav-link"
//               target="_blank"
//               id="profile-link"
//               href="https://github.com/istir"
//               rel="noreferrer"
//             >
//               {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}
//             </a>
//           </div>
//         </nav>
//         <main>
//           <section
//             id="welcome-section"
//             ref={this.welcomeRef}
//             style={{
//               backgroundColor: RandomColor.HSLtoString(this.state.background),
//             }}
//             onMouseEnter={() => {
//               this.onHover();
//             }}
//           >
//             <h1
//               style={{ color: RandomColor.HSLtoString(this.state.h1) }}
//               id="welcome-text"
//             >
//               Hello, I'm istir.
//             </h1>
//             <h2
//               style={{ color: RandomColor.HSLtoString(this.state.h2) }}
//               id="welcome-subtitle"
//             >
//               Nice to meet you.
//             </h2>
//           </section>

//           <section id="projects">
//             <Card
//               name="weebTools"
//               text="weebTools is a tool written in Electron and React with help from
//             Electron React Boilerplate that helps you manage your collection
//             of images, be it anime-themed or not."
//               imageSrc="https://raw.githubusercontent.com/istir/weebtools-3.0/master/docs/screenshot1.png"
//               link="https://github.com/istir/weebtools-3.0"
//               imageAlt="weebTools screenshoot"
//             />
//             <Card
//               name="tilde"
//               text={
//                 <div>
//                   Tilde is a startpage written in React and heavily inspired by{" "}
//                   <a
//                     className="card-link link"
//                     href="https://github.com/cadejscroggins/tilde"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     cadejscroggins/tilde
//                   </a>
//                   .<br /> Work In Progress.
//                   <br />
//                   <a
//                     className="card-link link"
//                     href="https://istir.github.io/tilde-5.4.0-react/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Check out demo!
//                   </a>
//                 </div>
//               }
//               imageSrc="https://raw.githubusercontent.com/istir/tilde-5.4.0-react/master/ShareX%202021-03-29%20at%2009.51.48.723-chrome.png"
//               link="https://github.com/istir/tilde-5.4.0-react/tree/master"
//               imageAlt="tilde screenshoot"
//             />
//           </section>
//           <Contact />
//           {/* <section id="contact">You can contact me here</section> */}
//           <About />
//         </main>
//       </div>
//     );
//   }
// }

// export default App;
