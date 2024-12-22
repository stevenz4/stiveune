import { NextPage } from "next";
import Landing from "./landing";
import Presentation from "./presentation";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Landing />
      <Presentation />
    </>
  );
};

export default Home;
