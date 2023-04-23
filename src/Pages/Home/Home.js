import { useEffect } from "react";
import ChangeTitle from "./../../functions/ChangeTitle";

import "./Home.scss";

const Home = () => {
  useEffect(() => {
    ChangeTitle(false);
  }, []);

  return <div className="home"></div>;
};

export default Home;
