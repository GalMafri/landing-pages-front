// Importing the required dependencies
import { Routes, Route } from "react-router";
import Login from "../Login/Login";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Page404 from "../Page404/Page404";
import { useDispatch, useSelector } from "react-redux";
import GetLocalStorage from "../../functions/GetLocalStorage";
import { setUserDataHandler } from "../../Store/UserData";

import "./MainRoute.scss";
// Defining a functional component called MainRoute
const MainRoute = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserData);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const storageUser = GetLocalStorage("user");
    if (storageUser && storageUser.token) {
      const { exp } = jwt_decode(storageUser.token);
      const expirationTime = exp * 1000 - 60000;
      if (Date.now() >= expirationTime) {
        setLogin(false);
      } else {
        const { userId } = jwt_decode(storageUser.token);
        dispatch(setUserDataHandler({ UserData: userId }));
        const remaningTime = expirationTime - new Date();
        setLogin(true);
        setTimeout(() => {
          setLogin(false);
        }, remaningTime);
      }
    }
  }, [user]);

  return (
    <div className="pages">
      <Routes>{!login && <Route path="/" element={<Login />} />}</Routes>
    </div>
  );
};

// Exporting the MainRoute component as the default export
export default MainRoute;
