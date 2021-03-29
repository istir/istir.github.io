import React, { Component } from "react";
import stylish from "./stylish.png";
class About extends Component {
  render() {
    return (
      <section id="about">
        <div id="about-content">
          <p>
            <b>Born and raised in Central Poland.</b>
          </p>{" "}
          <p>
            I've been interested in computers from the early days of my
            childhood.
          </p>
          <p>
            School never really satisfied my desire to learn new things about
            computers, so I tried doing it myself. At first, I started with
            graphics software, like GIMP and then later Photoshop. As it turns
            out, I wasn't that good at it, but I still liked using it, mostly as
            a tool for modifying images.
          </p>
          <p>
            After a few years of that, I learned about custom CSS in Firefox.
            Back then you'd use Stylish to change the site's CSS or even the
            whole browser's CSS. And I did, creating styles that better suited
            me.
          </p>
          <img
            style={{ maxWidth: "100%", display: "block", margin: "auto" }}
            src={stylish}
          />
          <p>
            After a few years of that I... burned out. I stopped what I was
            doing and started taking school more seriously, however, it turned
            out I didn't like CNC machines as much as I thought I did, so when I
            was choosing my university I chose Computer Science.
          </p>
          <p>
            {" "}
            I loved it, especially programming. After fiddling with my own
            programs, mainly in C# I rediscovered how fun was it to fiddle with
            CSS, but now I took it to another level and learned how to make
            whole websites.
          </p>
          <p>
            I'm still very much a beginner, but with a big desire to learn. I
            completed{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.freecodecamp.org/learn/responsive-web-design/"
            >
              FreeCodeCamp's Responsive Web Design
            </a>{" "}
            course and completed a few{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.frontendmentor.io/"
            >
              FrontEndMentor's challenges.
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
