import { NextPage } from "next";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14rem",
        color: "#ECD354",
      }}
    >
      <h1>Stiveune</h1>
    </div>
  );
};

export default Home;
