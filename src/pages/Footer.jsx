function Footer(){
  return(
    <section className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__logo"> 
            <img className="footer__logo--img" src="assets/images.png" alt="" />
          </div>
          <div className="footer__links">
            <a href="#" className="footer__link">Home</a>
            <a href="#discover" className="footer__link">Discover</a>
          </div>  
          <div className="footer__copyright">Copyright &copy; 2023 CineFind. Made by Samantha Stoltzfus</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;