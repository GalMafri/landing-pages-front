import { memo } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";

import "./Footer.scss";

const Footer = function () {
  return (
    <footer className="footer">
      <Wrapper classProps="footer_wrapper">
        <Link to={"https://www.layer.co.il/"} target="_blank">
          crafted by layer
        </Link>
      </Wrapper>
    </footer>
  );
};

export default memo(Footer);
