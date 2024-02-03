/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Photography portfolio website",
    description:
      "Created a portfolio website for local photographer to showcase their work using React. ",
    url: "https://owenthomasphotography.netlify.app/",
  },
  {
    title: "Consultancy website",
    description: "Created a mock consultancy website using HTML, CSS and JavaScript.",
    url: "https://jmedina0126.github.io/Consultancy-Business/",
  },
  {
    title: "My Resume Site",
    description: "My first website created using HTML, CSS and JavaScript.",
    url: "https://japexwebservices.netlify.app/",
  },
  {
    title: "Arborist website",
    description: "Mock arborist website ",
    url: "https://jmedina0126.github.io/MediciLignum/",
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            ref={ref}
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              opacity: inView ? 1 : 0,
              transition: "opacity 1s",
              animation: inView ? "500ms ease-out 0s 1 slideIn" : "",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
