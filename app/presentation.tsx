import { NextPage } from "next";

interface Props {}

const Presentation: NextPage<Props> = ({}) => {
  return (
    <div className="bg-presentation-section-background bg-cover flex flex-col h-screen text-7xl">
      <div className="bg-slate-900/70 pt-60 pl-32 h-screen">
        <p className="text-white">I'M 23</p>
        <p className="text-white">I’M A DEVELOPER</p>
        <p className="text-white">I’M A VOLLEYBALL LOVER</p>
        <p className="text-white">I’M ALWAYS SEEKING FOR NEW ADVENTURES</p>
        <p className="text-blue-300">I’M STEVEN ZHENG</p>
      </div>
    </div>
  );
};

export default Presentation;
