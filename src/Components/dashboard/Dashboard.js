import { NavLink } from "react-router-dom";
import "./Dashboard.scss";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  const menu = useSelector((state) => state.menu);
  console.log(menu);

  return (
    <div className="dashboard">
      {menu && (
        <nav className="dashboard_menu">
          <NavLink className="dashboard_menu-link" to={"/"}>
            <span>Dashboard</span>
          </NavLink>
          <NavLink className="dashboard_menu-link" to={"/pages"}>
            <span>Pages</span>
          </NavLink>
        </nav>
      )}

      {props.children}
    </div>
  );
};

export default Dashboard;
