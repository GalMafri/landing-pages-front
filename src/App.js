import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { disableMenuHandler } from "./Store/Menu";
import MainRoute from "./Pages/MainRoute/MainRoute"; // Import the all the routes in the project
import Header from "./Components/header/Header"; // Import the header of the project
import Footer from "./Components/Footer/Footer";

import "./App.scss";
import Loader from "./Components/loader/Loader";

function App() {
  const isLoading = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const location = useLocation();

  // Function that fires when the url change
  useEffect(() => {
    dispatch(disableMenuHandler()); // If the menu is open, this function close him
  }, [location]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/*" element={<MainRoute />} />
      </Routes>
      <Footer />
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
