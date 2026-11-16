function Nav() {
  return(
    <section class="navbar">
      <div class="nav">
        <div class="nav__content--wrapper">
          <div class="logo__container">
            <img class="logo__img" src="assets/images.png" alt="" />
            <span class="logo__text">CineFind</span>
          </div>
          <div class="nav__links">
            <a href="#" class="link">Home</a>
            <a href="#discover" class="link">Discover</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;