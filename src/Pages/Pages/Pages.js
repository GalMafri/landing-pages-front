import { Link } from "react-router-dom";
import InsideWrapper from "../../Components/Wrapper/InsideWrapper";
import "./Pages.scss";

const Pages = () => {
  return (
    <div className="pages">
      <InsideWrapper>
        <div className="pages_link">
          <Link to={"/pages/new"} className="pages_add">
            Add new +
          </Link>
        </div>

        <div className="pages_all">
          <h2 className="pages_all-title">Pages</h2>
        </div>
      </InsideWrapper>
    </div>
  );
};

export default Pages;
