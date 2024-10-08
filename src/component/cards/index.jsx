import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import Card from "../card";
import cardsData from "../../data"; // adjust the path based on your file structure

function Cards() {
  // Since we're using local data, we don't need loading or error states
  const cards = cardsData;

  return (
    <motion.div className="min-vh-100 d-flex flex-column align-items-center align-content-center">
      <h2 className="hello mt-5 fs-1">My Projects</h2>
      <LayoutGroup>
        <motion.div className="d-flex justify-content-center align-items-start gap-3 flex-wrap flex-30">
          {cards.map((card) => (
            <motion.div key={card.acf.id}>
              <Card card={card} />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
}

export default Cards;
