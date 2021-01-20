import React from "react";
import "./About.css";
import { Hero } from "../../subComponents";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "HTML",
    "(S)CSS",
    "React",
    "Node.js",
    "Express",
    "Mongodb",
    "redux",
    "Bootstrap",
    "MongoDB",
  ];

  const listSkills = skills.map((element) => <li> {element} </li>);

  return (
    <>
    <Container id="about" className="about pt-2" style={{ minHeight: "600px" }}>
      <Hero title="About me" />
      <Row className="d-flex align-items-center flex-column-reverse flex-md-row">
        <Col className=" col-lg-8 col-md-7 text-justify text-bold ">
          I am a Full Stack JavaScript Developer. My learning path is quite far from coding , after a
          biomedical engineering  degree, I found a passion in web
          application development and I joined bootcamp to learn programming from
          scratch with a lot of sleepless nights. Here are few
          technologies I've been working with recently:
          <ul className="skills mt-3">{listSkills}</ul>
        </Col>
        <div className="profil mb-5 mt-4 ml-md-5 shadow"></div>
      </Row>
    </Container>
    

  </>
  );
};

export default About;
