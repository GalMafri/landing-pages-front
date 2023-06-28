import { memo, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "./../Wrapper/Wrapper";
import user from "./../../assets/user.svg";
import RemoveLocalStorage from "../../functions/RemoveLocalStorage";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = function () {
  const userData = useSelector((state) => state.UserData);

  const logOutHandler = () => {
    RemoveLocalStorage("user");
    window.location.reload();
  };

  return (
    <Fragment>
      <header className="header">
        <Wrapper classProps="header_wrapper">
          <h1>
            <Link to={"/"}>{process.env.REACT_APP_Name}</Link>
          </h1>
          {userData && (
            <button className="header_icon" onClick={logOutHandler}>
              <img src={user} alt="user" />
            </button>
          )}
        </Wrapper>
      </header>
      <div className="speretor"></div>
    </Fragment>
  );
};

// Memoizing the component to improve performance
export default memo(Header);
