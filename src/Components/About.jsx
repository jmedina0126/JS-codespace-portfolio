/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a Front-End Developer and Content Creator, I bring a distinctive fusion of creative flair and technical proficiency, enriched by my background as a Data Analyst and Website Manager. With a foundation rooted in two years of tech industry experience and self-driven web development, my commitment to continual growth and positive contribution is unwavering. In my tenure as a Datix Support Administrator, I not only ensured the seamless operation and data integrity of systems but also harnessed my skills in user-centric design and JavaScript to develop scalable, intuitive applications. My journey extends beyond the realm of tech; having worked in both the education and the healthcare sector, I've cultivated a diverse and innovative approach to problem-solving. This varied experience allows me to view challenges through a unique lens, infusing creativity into every solution. Currently, I'm enhancing writing capabilities by writing a blog based on my learning over teh years and to fortify my current learning. As a Front-End Developer, my goal is to blend this rich tapestry of experiences to create compelling, engaging content and robust, user-friendly web applications. I am passionate about leveraging my blend of analytical prowess and creative energy to contribute to impactful projects, driving change and leaving a positive imprint in the digital landscape.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
  "content creation",
  "SEO and web accessibility",
  "Html, css, javascript",

];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          width: "50%",
          borderRadius: "1rem",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
