"use client";
import { NextPage } from "next";
import { motion } from "motion/react";

interface Props {}

const Landing: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-yellow-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        <h1 className="text-14xl text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 to-orange-400">
          Stiveune
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
      >
        <h2 className="text-5xl">Heyy 👋 </h2>
      </motion.div>
    </div>
  );
};

export default Landing;
