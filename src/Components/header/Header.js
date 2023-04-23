import { memo, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeLoaderHandler } from "../../Store/Store";
import { changeMenuHandler } from "../../Store/Menu";
import Wrapper from "./../Wrapper/Wrapper";

import "./Header.scss";
import "./DropDown.scss";

const Header = function () {
  // Accessing the 'menu' state from the Redux store
  const menu = useSelector((state) => state.menu);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  // Function to toggle the hamburger menu
  const toggelMenu = () => {
    if (menu) {
      document.querySelector(".hamburger-menu").classList.remove("active");
      document.querySelector(".dropDown").classList.remove("dropDown-active");
    } else {
      document.querySelector(".hamburger-menu").classList.add("active");
      document.querySelector(".dropDown").classList.add("dropDown-active");
    }
  };

  // Function to show the loader when the button is clicked
  const showLoader = () => {
    dispatch(changeLoaderHandler());
  };

  // UseEffect hook to toggle the hamburger menu when the 'menu' state changes
  useEffect(() => {
    if (count === 0) setCount(1);
    else toggelMenu();
  }, [menu]);

  return (
    <Fragment>
      <header className="header">
        <Wrapper classProps="header_wrapper">
          <div
            className="hamburger-menu"
            role="button"
            onClick={() => dispatch(changeMenuHandler())}
          >
            <div className="hamburger-menu-top"></div>
            <div className="hamburger-menu-middle"></div>
            <div className="hamburger-menu-bottom"></div>
          </div>
          <nav className="header_menu">
            <button className="header_menu-link" onClick={showLoader}>
              show loader
            </button>
            <NavLink className="header_menu-link" to={"posts"}>
              Posts
            </NavLink>
            <NavLink className="header_menu-link" to={"posts/Gal"}>
              Single post
            </NavLink>
            <NavLink className="header_menu-link" to={"/"}>
              Home
            </NavLink>
          </nav>
        </Wrapper>
      </header>
      <div className="speretor"></div>
      <div className="dropDown"></div>
    </Fragment>
  );
};

// Memoizing the component to improve performance
export default memo(Header);
