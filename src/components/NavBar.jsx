import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="btn-container">
      <Link to="/">
        <button className="btn">LOGO Placeholder</button>
      </Link>
      <Link to="/community-resources">
        <button className="btn">Community Resources</button>
      </Link>
      <Link to="/about">
        <button className="btn">About</button>
      </Link>
      </div>
    </nav>
  );
};

export default NavBar;
