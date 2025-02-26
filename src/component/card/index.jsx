import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cssy from "../../images/css.png";
import jsy from "../../images/js.png";
import bootstrapy from "../../images/bootstrap.png";
import reacty from "../../images/physics.png";
import sassy from "../../images/sass.png";
import htmll from "../../images/html.png";
import mongodb from "../../images/mongo.png";
import node from "../../images/node.png"
import express from "../../images/express.png"
import fire from "../../images/firebase.svg"





function Card({ card: { acf } }) {
  const {
    title,
    description,
    image,
    css,
    bootstrap,
    js_,
    react,
    scss,
    html,
    github,
    live,
    mongoose,
    nodejs,
    expresss,
    firebase
  } = acf || {}; // Destructure acf properties

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="glass2 d-flex justify-content-center align-items-stretch flex-column flex-wrap rounded overflow-hidden shadow mt-5"
        layout
        onClick={() => setIsOpen(!isOpen)}
        style={{ maxWidth: "420px" }}
        transition={{
          duration: 0.3,
          ease: "circInOut",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="w-100 h-100 overflow-hidden position-relative">
          <motion.img
            src={image}
            alt=""
            className="w-100 h-100"
            layout
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
              opacity: 0.9,
            }}
          />
          <motion.span
            className="position-absolute bottom-0 start-0 bg-info border-primary px-2 rounded-top py-1"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {title}
          </motion.span>
        </motion.div>

        {isOpen && (
          <motion.div
            className="w-100 h-100 p-3"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h2
              className="text-break hello"
              layout
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Description
            </motion.h2>
            <motion.p
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {description}
            </motion.p>
            <hr />
            <motion.div className="d-flex gap-2 flex-column">
              <motion.h2
                className="hello"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Technologies
              </motion.h2>
              <motion.div
                className="d-flex gap-2"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
             {html && (
            <motion.div style={{ width: "30px" }}>
            <img src={htmll} alt="HTML" className="w-100 h-100" />
           </motion.div>
                )}
                {bootstrap && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={bootstrapy} alt="Bootstrap" className="w-100 h-100" />
                  </motion.div>
                )}
                {react && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={reacty} alt="React" className="w-100 h-100" />
                  </motion.div>
                )}
                {scss && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={sassy} alt="Sass" className="w-100 h-100" />
                  </motion.div>
                )}
                {js_ && (
                  <motion.div style={{ width: "30px" }} className="rounded">
                    <img src={jsy} alt="JavaScript" className="w-100 h-100" />
                  </motion.div>
                )}
                {css && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={cssy} alt="CSS" className="w-100 h-100" />
                  </motion.div>
                )}
                {mongoose && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={mongodb} alt="Mongo" className="w-100 h-100" />
                  </motion.div>
                )}
                {nodejs && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={node} alt="Node" className="w-100 h-100" />
                  </motion.div>
                )}
                 {expresss && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={express} alt="Express" className="w-100 h-100" />
                  </motion.div>
                )}
                {firebase && (
                  <motion.div style={{ width: "30px" }}>
                    <img src={fire} alt="Firebase" className="w-100 h-100" />
                  </motion.div>
                )}


              </motion.div>
            </motion.div>
            <hr />
            <motion.div className="d-flex gap-2 mt-auto">
              <motion.a
                className="btn btn-outline-primary fs-5 text-white mt-3"
                href={live}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                href={github}
                className="btn btn-outline-primary fs-5 text-white mt-3"
              >
                Github repo
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Card;
