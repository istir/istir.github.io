import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
class Contact extends Component {
  render() {
    return (
      <section id="contact">
        {/* <h1>Contact me</h1> */}

        <a
          className="contact link"
          href="https://github.com/istir"
          target="_blank"
          rel="noreferrer"
        >
          {/* <FontAwesomeIcon icon={faGithub} /> Github */}
        </a>

        <a
          className="contact link"
          href="mailto:grzegorz.siedlecki@outlook.com"
        >
          {/* <FontAwesomeIcon icon={faEnvelope} /> Email */}
        </a>
      </section>
    );
  }
}

export default Contact;
