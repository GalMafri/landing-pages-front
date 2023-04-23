import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChangeTitle from "./../../functions/ChangeTitle";
import Wrapper from "../../Components/Wrapper/Wrapper";

import "./SinglePost.scss";

const SinglePost = () => {
  const params = useParams();
  const [pageName] = useState(params.postid);

  useEffect(() => {
    ChangeTitle(pageName);
  }, [pageName]);

  return (
    <div className="SinglePost">
      <Wrapper>
        <h2>page name {pageName}</h2>
        <div>single post</div>
      </Wrapper>
    </div>
  );
};

export default SinglePost;
