import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Lotties } from "../../subComponents";
import Splash from "../../assets/anim/splash.json";

import { useSpring, animated } from "react-spring";

const Home = () => {
  const slideDown = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -50 },
  });

  return (
    <Container
      fluid={true}
      className="d-flex align-items-end justify-content-center "
      style={{ minHeight: "80vh" }}
    >
      <Row className="home-container d-flex flex-column flex-lg-row w-100">
        <Col className="home-animation col-4 d-flex justify-content-center align-items-center splash-container">
          <Lotties
            animationData={Splash}
            lh="20rem"
            lw="50rem"
            mh="18rem"
            mw="50rem"
          />
        </Col>
        <Col className="col-12 w-100 col-lg-8 pb-sm-5">
          <animated.div style={slideDown}>
            <p style={slideDown} className="hi text-bold">
              Hi, I am
            </p>
            <h1 style={slideDown} delay="500" className="name">
              Full Stack Developer.
            </h1>
            <p className="subtitle">Passionate about Javascript.</p>
            <p className=" pl-0 title-description col-lg-8 mt-md-4">
              I did lot of full CRUD projects using MERN stack , HTML , Javascript , CSS  and more .
            </p>
            <p>
              <q>
                <i>Chase your passion, not your pension.</i>
              </q>
              <b> Denis-Waitley.</b>
            </p>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
