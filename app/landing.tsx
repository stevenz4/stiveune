"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";

interface Props {}

const Landing: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-yellow-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-14xl">Stiveune</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 4 }}
      >
        <h2 className="text-5xl">Just a way to showcase myself</h2>
      </motion.div>
    </div>
  );
};

export default Landing;
