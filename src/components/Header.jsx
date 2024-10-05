import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  );
};

export default Header;
