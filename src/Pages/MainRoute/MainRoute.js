// Importing the required dependencies
import { Routes, Route } from "react-router";
import Home from "../Home/Home";
import Page404 from "../Page404/Page404";
import Posts from "../Posts/Posts";
import SinglePost from "../SinglePost/SinglePost";
import "./MainRoute.scss";

// Defining a functional component called MainRoute
const MainRoute = () => {
  // The component returns JSX that renders the contents of the page
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts title="Posts" />} />
        <Route path="/posts/:postid" element={<SinglePost />} />
        <Route path="*" element={<Page404 title="404" />} />
      </Routes>
    </div>
  );
};

// Exporting the MainRoute component as the default export
export default MainRoute;
