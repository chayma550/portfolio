import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import react from "../../images/physics.png";
import git from "../../images/git.png";
import github from "../../images/github.png";
import sass from "../../images/sass.png";
import mongo from "../../images/mongo.png";
import vs from "../../images/vs.png";
import node from "../../images/node.png";
import express from "../../images/express.png";




function AboutMe() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ scale, opacity }}
      ref={targetRef}
      transition={{ delay: 2, duration: 3 }}
    >
      <Row className="my-5 gap-5 align-items-start d-flex">
        {" "}
        <Col lg xl={7}>
          <h2 className="hello fs-1 text-center mb-3">About Me</h2>
          <div className="d-flex flex-column gap-3 fs-5 glass p-5 ">
            <p>
              I'm a passionate full stack developer from Tunisia. 
              I've dedicated myself to the art of web development.
              I am a hardworking and reliable person , I can solve problems , I'm serious at work , I am always energetic and eager to learn new skills
            </p>

            <p>
              I thrive on collaborating with clients to bring their visions to
              life. With a meticulous eye for detail and a commitment to
              excellence, I aim to exceed expectations by creating exceptional
              websites. I believe in crafting designs that not only look great
              but also provide seamless user experiences.{" "}
            </p>

            <p>
              {" "}
              Let's work together to create websites that leave a lasting
              impression. I'm excited to contribute my expertise and help your
              digital projects succeed in this ever-changing landscape.
            </p>
          </div>
        </Col>{" "}
        <Col md>
          {" "}
          <h2 className="hello fs-1  mb-3 text-center">
            Technologies and Tools
          </h2>
          <div className="d-flex gap-3 justify-content-center p-3 about rounded flex-wrap">
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={html} alt="" style={{ maxWidth: "80px" }} />
              <span>HTML</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={css} alt="" style={{ maxWidth: "80px" }} />
              <span>CSS</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={js} alt="" style={{ maxWidth: "80px" }} />
              <span>JavaScript</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={bootstrap} alt="" style={{ maxWidth: "80px" }} />
              <span>Bootstrap</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={sass} alt="" style={{ maxWidth: "80px" }} />
              <span>SCSS</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={react} alt="" style={{ maxWidth: "80px" }} />
              <span>React.js</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={node} alt="" style={{ maxWidth: "80px" }} />
              <span>Node.js</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={git} alt="" style={{ maxWidth: "80px" }} />
              <span>Git</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={github} alt="" style={{ maxWidth: "80px" }} />
              <span>Github</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={vs} alt="" style={{ maxWidth: "80px" }} />
              <span>VSCode</span>
            </div>
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={express} alt="" style={{ maxWidth: "80px" }} />
              <span>Express</span>
            </div>
           
            <div className="d-flex flex-column  align-items-center gap-2">
              <img src={mongo} alt="" style={{ maxWidth: "80px" }} />
              <span>MongoDB</span>
            </div>{" "}
          </div>
        </Col>
      </Row>
    </motion.div>
  );
}

export default AboutMe;
