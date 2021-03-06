import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/units">
          Units
        </Link>
      </nav>
    </header>
  );
};

export default Header;
