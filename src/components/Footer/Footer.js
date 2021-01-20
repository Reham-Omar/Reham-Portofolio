import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as Github } from "../../assets/icons/github-brands.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin-brands.svg";
import { Hero } from "../../subComponents";
import { Container } from "react-bootstrap";
import { ReactComponent as Gmail } from "../../assets/icons/gmail.svg";

const Footer = () => {
  return (
    <Container
      id="contact pt-2"
      className="contact"
      style={{ minHeight: "150px" }}
    >
      <Hero title="Contact" />

    <Row  id="contact pt-2"  className=" contact footer d-flex flex-column pt-3">
      <Col className="d-flex align-items-center justify-content-center">

      <a
          href="https://www.linkedin.com/in/reham-al-sobh/"
          rel="noopener noreferrer"
          target="_blank"
          className="fl d-flex justify-content-end f15"
        >
          <Linkedin className="ics" />
        </a> 
        
      <a
          href="mailto: rehamalsobh96@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="fl d-flex justify-content-end f15"
        >
        <Gmail className="ics" />
        </a>
        <a
          href="https://github.com/Reham-Omar"
          rel="noopener noreferrer"
          target="_blank"
          className="fl d-flex justify-content-start f15"
        >
          <Github className="ics" />
        </a>
        
            
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <p className="copyright text-center">
          © 2020 Reham AL-Sobh - All Rights Reserved
        </p>
      </Col>
    </Row>
    </Container>

  );
};

export default Footer;
