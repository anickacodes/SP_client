import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>LOGO Placeholder</button>
      </Link>
      <Link to="/community-resources">
        <button>Community Resources</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </nav>
  );
};

export default NavBar;
