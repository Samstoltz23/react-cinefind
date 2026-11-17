
import logo from "../assets/images.png";

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
            <a href="/" className="link">
              Home
            </a>
            <a href="/discover" className="link">
              Discover
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
