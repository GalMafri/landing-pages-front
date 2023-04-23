import { useEffect } from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
import ChangeTitle from "../../functions/ChangeTitle";
import "./Page404.scss";

const Page404 = ({ title }) => {
  useEffect(() => {
    ChangeTitle(title);
  }, [title]);

  return (
    <div>
      <Wrapper>404</Wrapper>
    </div>
  );
};

export default Page404;
