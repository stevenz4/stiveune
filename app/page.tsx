import { NextPage } from "next";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-4xl text-yellow-300">
      <h1 className="text-14xl">Stiveune</h1>
      <h2 className="text-5xl">Just a way to showcase myself</h2>
    </div>
  );
};

export default Home;
