import { useEffect } from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import ChangeTitle from "../../functions/ChangeTitle";
import "./Posts.scss";

const Posts = ({ title }) => {
  useEffect(() => {
    ChangeTitle(title);
  }, [title]);

  return (
    <div>
      <Wrapper>posts page</Wrapper>
    </div>
  );
};

export default Posts;
