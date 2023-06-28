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
import Home from "../Home/Home";
import Dashboard from "../../Components/dashboard/Dashboard";
import Pages from "../Pages/Pages";
import NewPage from "../NewPage/NewPage";
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
        if (!userId) return;
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
      {!login && (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}

      {login && (
        <Dashboard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/pages/new" element={<NewPage />} />
          </Routes>
        </Dashboard>
      )}
    </div>
  );
};

// Exporting the MainRoute component as the default export
export default MainRoute;
