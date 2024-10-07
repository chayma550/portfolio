import React from "react";
import bisho from "../../images/contact.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
function Contact() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.div
      className="min-vh-100 d-flex justify-content-evenly align-items-center gap-2 flex-wrap"
      style={{ scale, opacity }}
      ref={targetRef}
      transition={{ delay: 2, duration: 3 }}
    >
      <div>
        <h2 className="hello fs-1 mb-5">Contact Information</h2>
        <div className="d-flex gap-3 justify-content-between ">
          {" "}
          <a className=" text-white fs-1 " href="mailto:rachayma@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://github.com/chayma550"
            className="text-white fs-1 "
          >
            <i className="bi bi-github linkHover"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/chayma-raboudi-336886196/"
            className=" text-white fs-1 "
          >
            <i className="bi bi-linkedin linkHover"></i>
          </a>
          
          <a
            href="https://www.instagram.com/chaymaraboudi/"
            className=" text-white fs-1 "
          >
            <i className="bi bi-instagram linkHover"></i>
          </a>
        </div>
      </div>
      <div style={{ width: "300px" }}>
        {" "}
        <img
          src={bisho}
          alt="contact section"
          className="cntctShadow w-100 h-100"
        />
      </div>
    </motion.div>
  );
}

export default Contact;
