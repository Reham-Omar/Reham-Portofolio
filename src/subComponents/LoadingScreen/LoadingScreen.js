import React from "react";
import "./LoadingScreen.css";
import { useSpring, animated } from "react-spring";

const LoadingScreen = () => {
  const fadeIn = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <div className="loading-container d-flex align-items-center justify-content-center">
      <animated.div style={fadeIn} className="theName">
        <div className="logo logo1">R</div>
        <div className="logo logo2">E</div>
        <div className="logo logo3">H</div>
        <div className="logo logo4">A</div>
        <div className="logo logo5">M</div>

        <div className="logo-next"> Welcome To My Portofolio
</div>
      </animated.div>
    </div>
  );
};

export default LoadingScreen;
