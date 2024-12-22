"use client";
import dayjs from "dayjs";
import { once } from "events";
import { motion, useInView } from "motion/react";
import { NextPage } from "next";
import { useRef } from "react";

interface Props {}

const Title = (text: string, important: boolean) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5 },
      }}
      viewport={{
        once: true,
      }}
    >
      <p
        className={`${
          important
            ? "text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 to-orange-400"
            : "text-white"
        } text-7xl`}
      >
        {text}
      </p>
    </motion.div>
  );
};

const Presentation: NextPage<Props> = ({}) => {
  const myAge = dayjs().diff("2001-04-01", "year");

  return (
    <div className="bg-presentation-section-background bg-cover flex flex-col h-screen">
      <div className="bg-slate-900/70 pt-60 pl-32 h-screen">
        {Title(`I'M ${myAge}`, false)}
        {Title("I’M A CODE MAKER", false)}
        {Title("I’M BASED IN PARIS", false)}
        {Title("I’M A VOLLEYBALL LOVER", false)}
        {Title("I’M ALWAYS SEEKING FOR NEW STUFF", false)}
        {Title("I’M STEVEN ZHENG", true)}
      </div>
    </div>
  );
};

export default Presentation;
