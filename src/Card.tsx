import React from "react";

interface IProps {
  name: string;
  text:
    | string
    | React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >;
  imageSrc: string;
  link: string;
  imageAlt?: string;
}
export default class Card extends React.Component<IProps> {
  render() {
    return (
      <section
        className="project-tile shadow-far"
        // onClick={() => {
        //   window.open(this.props.link, "_blank");
        // }}
      >
        <h1>{this.props.name}</h1>
        <p>{this.props.text}</p>
        <img
          className="project-image shadow-near"
          src={this.props.imageSrc}
          alt={this.props.imageAlt ? this.props.imageAlt : "App screenshot"}
        />
        <br />
        <a
          className="card-link link"
          href={this.props.link}
          target="_blank"
          rel="noreferrer"
        >
          Check it out on GitHub
        </a>
      </section>
    );
  }
}
