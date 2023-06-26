import { memo, Fragment, useState } from "react";
import { changeLoaderHandler } from "../../Store/Store";
import Wrapper from "./../Wrapper/Wrapper";

import "./Header.scss";

const Header = function () {
  return (
    <Fragment>
      <header className="header">
        <Wrapper classProps="header_wrapper"></Wrapper>
      </header>
      <div className="speretor"></div>
    </Fragment>
  );
};

// Memoizing the component to improve performance
export default memo(Header);
