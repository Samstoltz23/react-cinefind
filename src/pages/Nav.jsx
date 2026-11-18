
import logo from "../assets/images.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className="navbar">
      <div className="nav">
        <div className="nav__content--wrapper">
          <div className="logo__container">
            <img className="logo__img" src={logo} alt="CineFind" />
            <span className="logo__text">CineFind</span>
          </div>
          <div className="nav__links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/discover" className="link">
              Discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
